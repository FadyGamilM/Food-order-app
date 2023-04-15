import { NextFunction, Request, Response } from "express";
import { LoginCustomer, RequestNewOtpService, signupCustomer, VerifyCustomerAccount } from "../services";
import { customerLoginDto, customerSignupDto, getCustomerDto } from "../dtos";
import { AuthorizationPayloadDto } from "../dtos/auth/authorizationPayloadDto";
import { Log } from "../utility/ConsoleLogger";

export const SignupController = async (req: Request, res: Response, next: NextFunction) =>
{
   //* call the service layer
   const response = await signupCustomer(<customerSignupDto>req.body);

   //* send the response 
   if (response === null) return res.status(500).json({ "error": "Server error !!" });
   return res.status(201).json({ "data": response });
};

export const LoginCustomerController = async (req: Request, res: Response, neext: NextFunction) =>
{
   //* extract the request body 
   const loginDto: customerLoginDto = <customerLoginDto>req.body;

   //* call the service business logic
   const response = await LoginCustomer(loginDto);

   //* return the response
   if (response === null) return res.status(401).json({ "error": "invalid credentials" });
   else return res.status(200).json({ "data": response });
};

export const GetCustomerProfileController = async (req: Request, res: Response, neext: NextFunction) => { };

export const UpdateCustomerProfileController = async (req: Request, res: Response, neext: NextFunction) => { };

export const VerifyCustomerAccountController = async (req: Request, res: Response, neext: NextFunction) =>
{
   //* get the data from the request
   const otp: number = (req.body.otp);
   const customerPayload = req.user;
   if (customerPayload === null || customerPayload === undefined) return res.status(401).json({ "error": "user not authenticated" });

   //* call the business logic
   let response = await VerifyCustomerAccount(customerPayload, otp);

   //* return the response
   if (response === null) return res.status(403).json({ "error": "not verified" });
   else {
      let customerDto: getCustomerDto = { email: response.email, id: response.id, username: response.username, isVerified: response.isVerified, phone: response.phone };
      return res.status(200).json({ "data": customerDto });
   }
};

export const GetOTPController = async (req: Request, res: Response, next: NextFunction) =>
{
   //* get the user from the req after passing the authorization middleware
   const customer = req.user;

   if (!customer) return res.status(401).json({ "error": "Not Authenticated" });

   //* call the bsuniess logic service
   const response = await RequestNewOtpService(customer);

   //* return the response
   if (response === null) return res.status(400).json({ "error": "bad request" });
   else return res.status(200).json({ "data": response });
};