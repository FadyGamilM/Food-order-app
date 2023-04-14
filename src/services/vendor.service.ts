import { loginDto } from "../dtos/vendor/loginDto";
import { vendorSignaturePayloadDto } from "../dtos/vendor/vendorSignaturePayloadDto";
import { Log } from "../utility/ConsoleLogger";
import { GenerateSignature, ValidateLoginPassword } from "../utility/PasswordEncryption";
import { db } from "./prisma.service";

export const Login = async (loginRequest: loginDto) =>
{
   try {
      // get the vendor from the db using the given email
      let existingVendor = await db.vendor.findUnique({ where: { email: loginRequest.email } });

      // check if this vendor exists 
      if (existingVendor === null) return null;

      // check if the credentials are valid
      let isValidCredentials: boolean = await ValidateLoginPassword(loginRequest.password, existingVendor.password, existingVendor.salt);

      // get a signature for this user for later use in other endpoints actions
      const payload: vendorSignaturePayloadDto = {
         id: existingVendor.id,
         brandName: existingVendor.brandName,
         email: existingVendor.email,
         ownerName: existingVendor.ownerName,
         foodType: existingVendor.foodType
      };
      const signature: string = await GenerateSignature(payload);

      // return the result to the controller
      return isValidCredentials === true ? signature : null;
   }
   catch (err: any) {
      Log(err.message);
   }
   finally {
      await db.$disconnect();
   }
};