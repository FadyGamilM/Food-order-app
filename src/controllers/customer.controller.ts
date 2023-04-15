import { NextFunction, Request, Response } from "express";
import { signupCustomer } from "../services";
import { customerSignupDto } from "../dtos";

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

export const VerifyCustomerAccountController = async (req: Request, res: Response, neext: NextFunction) => { };

export const GetOTPController = async (req: Request, res: Response, next: NextFunction) => { };