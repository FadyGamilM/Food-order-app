import express, { Express, Request, Response, NextFunction } from "express";
import { createVendorDto } from "../dtos";
import { Log } from "../utility/ConsoleLogger";
import { createVendor, getVendorById, getVendors } from "../services";

export const createVendorController = async (req: Request, res: Response, next: NextFunction) =>
{
   // get the data from the request body
   const vendor = <createVendorDto>req.body;
   Log("hello from post request");

   // call the database service to persist the new vendor entity
   let createdVendor = await createVendor(vendor);

   // return the response 
   return res.status(201).json({ "res": vendor });
};

export const getVendorsController = async (req: Request, res: Response, next: NextFunction) =>
{
   let vendors = await getVendors();
   return res.status(200).json({
      "data": vendors
   });
};

export const getVendorByIdController = async (req: Request, res: Response, next: NextFunction) =>
{
   if (req.params.id === null) {
      return res.status(400).json({
         "error": "bad request"
      });
   }
   let vendor = await getVendorById(parseInt(req.params.id));
   if (vendor === null) return res.status(404).json("no vendor is found with specified id");
   return res.status(200).json({
      "data": vendor
   });
};