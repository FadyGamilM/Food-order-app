

import { Router, Request, Response, NextFunction } from "express";
import { GetAvailableVendors, GetAllVendors, GetTopRatingVendors, GetVendorMealsUnderSpecificTime } from "../services";

//* customer can retrieve all vendors (resturants)
export const GetAllVendorsController = async (req: Request, res: Response, next: NextFunction) =>
{
   //* call the service layer
   const vendors = await GetAllVendors();

   //* return the response
   return res.status(200).json({ "data": vendors });
};


//* customer can view the top rating resturants
export const GetTopRatingVendorsController = async (req: Request, res: Response, next: NextFunction) =>
{
   //* call the service layer
   let topRatingVendors = await GetTopRatingVendors(5);

   //* return the response
   return res.status(200).json({ "data": topRatingVendors });
};


//* customer can view the meals servced by specific resturan in less than specific time
export const GetVendorMealsUnderSpecificTimeController = async (req: Request, res: Response, next: NextFunction) =>
{
   //* extract data from the body of the request 
   let duration: number = parseInt(req.body.duration);

   //* extract the vendor pinCode "location"
   let pinCode: string = req.params.pinCode;

   //* call the service layer 
   let mealsUnderDuration = await GetVendorMealsUnderSpecificTime(duration, pinCode);

   //* return the response 
   return res.status(200).json({ "data": mealsUnderDuration });
};


//* customer can view all resturants (vendors) who are currently avilable
export const GetAvailableVendorsController = async (req: Request, res: Response, next: NextFunction) =>
{
   //* call the service layer
   let vendors = await GetAvailableVendors();

   //* return the response 
   return res.status(200).json({ "data": vendors });
};

