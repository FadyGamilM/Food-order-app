import { NextFunction, Request, Response } from "express";
import { signupCustomer, VerifyCustomerAccount } from "../services";
import { customerSignupDto, getCustomerDto } from "../dtos";
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

export const LoginCustomerController = async (req: Request, res: Response, neext: NextFunction) => { };

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

export const GetOTPController = async (req: Request, res: Response, next: NextFunction) => { };