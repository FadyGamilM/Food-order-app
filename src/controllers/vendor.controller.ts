import { Request, Response, NextFunction } from "express";
import { loginDto } from "../dtos/vendor/loginDto";
import { Login, GetVendorById } from "../services/vendor.service";
import { getVendorDto } from "../dtos/vendor/getVendorDto";

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
export const getVendorProfile = async (req: Request, res: Response, next: NextFunction) =>
{
   //* extract the authorized user from the headers
   const authorizedUserPayload = req.user;

   //* call the service business logic to extract this user from db 
   if (authorizedUserPayload?.id === undefined) {
      return res.status(403).json({
         "error": "vendor is not authorized"
      });
   }
   const existingVendor = await GetVendorById(authorizedUserPayload?.id);

   //* return the response

   if (existingVendor) return res.status(200).json({ "data": existingVendor });
};

// vendor can update his/her profile only
export const UpdateVendorProfile = async (req: Request, res: Response, next: NextFunction) => { };

// vendor can update his/her provided services
export const updateVendorServices = async (req: Request, res: Response, next: NextFunction) => { };
