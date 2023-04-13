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