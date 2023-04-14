import { Request, Response, NextFunction } from "express";
import { loginDto } from "../dtos/vendor/loginDto";
import { Login } from "../services/vendor.service";
export const LoginController = async (req: Request, res: Response, next: NextFunction) =>
{
   // extract the request body
   let loginRequest: loginDto = <loginDto>req.body;

   // call the service for business logic processing 
   let result = await Login(loginRequest);

   // return the response
   return res.status(200).json({ "data": result });
};

// for authorization 
export const getVendorProfile = async (req: Request, res: Response, next: NextFunction) => { };

// vendor can update his/her profile only
export const UpdateVendorProfile = async (req: Request, res: Response, next: NextFunction) => { };

// vendor can update his/her provided services
export const updateVendorServices = async (req: Request, res: Response, next: NextFunction) => { };
