import { exit } from "process";
import { customerSignupDto, customerSignaturePayloadDto, customerLoginDto, getCustomerDto } from "../dtos";
import { Log } from "../utility/ConsoleLogger";
import { db } from "./prisma.service";
import { generateOTP } from "../utility/GenerateOTP";
import { EncryptPassword, GenerateSignature, ValidateSignature, generateSalt } from "../utility/PasswordEncryption";
import { RequestOTP } from "./twilio.service";
import { AuthorizationPayloadDto } from "../dtos/auth/authorizationPayloadDto";
import { Customer } from "../../prisma/client";

export const signupCustomer = async (customerDto: customerSignupDto) =>
{
   try {

      //* validate this dto
      if (customerDto.email === "" || customerDto.password === "" || customerDto.username === "" || customerDto.phone === "") return null;

      //* check if there is any user in db with this email 
      let isEmailExistsBefore = await db.customer.findUnique({ where: { email: customerDto.email } });
      if (isEmailExistsBefore !== null) return null;

      //* generate otp for this user 
      let otp_info = generateOTP();
      Log(`${otp_info.otp}`);
      Log(`${otp_info.opt_expiry}`);

      //* generate salt and hash the password 
      let salt = await generateSalt();
      let ecnryptedPass: string = await EncryptPassword(customerDto.password, salt);

      //* persist the new entity
      const newCustomer = await db.customer.create({
         data: {
            email: customerDto.email,
            password: ecnryptedPass,
            salt: salt,
            otp: otp_info.otp,
            otp_expiry: otp_info.opt_expiry,
            username: customerDto.username,
            isVerified: false,
            phone: customerDto.phone
         }
      });

      //* check if anything happended during the persistence operation 
      if (newCustomer === null) return null;

      //* send an otp notification to the customer mobile
      await RequestOTP(newCustomer.otp, newCustomer.phone);

      //* generate a signature containing this customer payload 
      let payload: customerSignaturePayloadDto = {
         id: newCustomer.id,
         email: newCustomer.email,
         isVerified: newCustomer.isVerified,
         phone: newCustomer.phone,
         username: newCustomer.username
      };
      const paylaodSIgnature = await GenerateSignature(payload);

      //* send back the response to the controller 
      return paylaodSIgnature;

   }
   catch (err: any) {
      Log(err.message);
      exit(1);
   }
   finally {
      (
         async () =>
         {
            //* close the db tcp connection 
            await db.$disconnect();
         }
      )();
   }
};

export const VerifyCustomerAccount = async (customerPayload: AuthorizationPayloadDto, otp: number) =>
{
   //* validation check
   const customer = await db.customer.findUnique({ where: { id: customerPayload.id } });
   if (customer === null) return customer; // TODO => customize the returns with myCustomStatusCode later

   Log(`${otp - customer.otp}`);

   //* check the opt_expiry date validity .. 
   if (otp == customer.otp) {
      let expiryDate = customer.otp_expiry;

      let isValid: boolean = (Number(expiryDate) - Date.now()) > 0 ? true : false;

      if (isValid) {
         let verifiedCustomer = await db.customer.update({ where: { id: customer.id }, data: { isVerified: true } });
         return verifiedCustomer;
      }
      else return null;
   } else {

      return null;
   }
};

export const LoginCustomer = async (loginDto: customerLoginDto) =>
{
   //* check if there is any user in the datbase with this email
   const customerExists = await db.customer.findUnique({ where: { email: loginDto.email } });
   if (customerExists === null) return null;

   //* hash the pass using the same saved salt
   let hashedPass: string = await EncryptPassword(loginDto.password, customerExists.salt);

   //* compare the passwords to verify the credentials 
   if (hashedPass === customerExists.password) {
      //* generate the signature and return the result to the controller to return the response 
      let customerPayload: getCustomerDto = {
         email: customerExists.email,
         id: customerExists.id,
         isVerified: customerExists.isVerified,
         phone: customerExists.phone,
         username: customerExists.phone
      };
      let paylaodSignature = await GenerateSignature(customerPayload);
      return paylaodSignature;
   } else {
      return null;
   }

};

export const RequestNewOtpService = async (customer: AuthorizationPayloadDto) =>
{
   //* check if this customer really in db or not 
   let existingCustomer = await db.customer.findUnique({ where: { email: customer.email } });
   if (!existingCustomer) return null;

   //* generate a new otp and otp_expiry
   const otpInfo = generateOTP();

   //* update the customer info and persist this updated customer into the database 
   let updatedCustomer = await db.customer.update({
      where: { id: existingCustomer.id }, data: {
         otp: otpInfo.otp, otp_expiry: otpInfo.opt_expiry
      }
   });

   //* send this otp number to the customer phone 
   await RequestOTP(updatedCustomer.otp, updatedCustomer.phone);

   //* return the updated customer signature to the controller to send the response 
   let customerPaylaod: getCustomerDto = {
      id: updatedCustomer.id,
      email: updatedCustomer.email,
      username: updatedCustomer.username,
      phone: updatedCustomer.phone,
      isVerified: updatedCustomer.isVerified
   };
   return await GenerateSignature(customerPaylaod);

};