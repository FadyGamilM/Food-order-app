import { Request, Response, NextFunction } from "express";
import { loginDto } from "../dtos/vendor/loginDto";
import { Login, GetVendorById, UpdateVendorProfile } from "../services/vendor.service";
import { getVendorDto } from "../dtos/vendor/getVendorDto";
import { updateVendorProfile } from "../dtos";
import { Log } from "../utility/ConsoleLogger";

//! => Login Controller 
export const LoginController = async (req: Request, res: Response, next: NextFunction) =>
{
   // extract the request body
   let loginRequest: loginDto = <loginDto>req.body;

   // call the service for business logic processing 
   let result = await Login(loginRequest);

   // return the response
   return res.status(200).json({ "data": result });
};

//! => for authorization 
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
   else return res.status(403).json({ "error": "user is not authorized" });
};

//! => vendor can update his/her profile only
export const UpdateVendorProfileController = async (req: Request, res: Response, next: NextFunction) =>
{
   // ==> check if the current logged-in vendor is the one who owns this profile (authority checking)
   //* extract the authorized user from the headers
   const authorizedVendorPayload = req.user;


   if (authorizedVendorPayload === undefined) {
      return res.status(403).json({
         "error": "vendor is not authorized"
      });
   }

   //* call the service business logic to extract this user from db 
   const existingVendor = await GetVendorById(authorizedVendorPayload?.id);

   //* if this vendor is not the profile's owner
   if (!existingVendor) return res.status(403).json({ "error": "user is not authorized" });

   //* extract the updated vendor profile from the body of the request to persist the new updates
   let updatedProfile: updateVendorProfile = <updateVendorProfile>req.body;

   //* call the service business logic to update this profile with the new updates
   let response = await UpdateVendorProfile(updatedProfile, authorizedVendorPayload.id);

   //* return the response
   if (response !== null) return res.status(200).json({ "data": response });
   else return res.status(500).json({ "error": "server error !" });

};

// vendor can update his/her provided services
export const updateVendorServices = async (req: Request, res: Response, next: NextFunction) => { };
