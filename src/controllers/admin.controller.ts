import express, { Express, Request, Response, NextFunction } from "express";
import { createVendorDto } from "../dtos";
import { Log } from "../utility/ConsoleLogger";

export const createVendor = async (req: Request, res: Response, next: NextFunction) =>
{
   // get the data from the request body
   const vendor = <createVendorDto>req.body;
   Log("hello from post request");

   // call the database service to persist the new vendor entity

   // return the response 
   return res.status(201).json({ "res": vendor });
};