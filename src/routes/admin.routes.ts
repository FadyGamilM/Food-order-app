import express, { NextFunction, Router, Request, Response } from "express";
import { createVendorController } from "../controllers";

// instantiate the router instance
const router: Router = Router();

router.post("/vendors/new", createVendorController);


router.get("/", (req: Request, res: Response, next: NextFunction) =>
{
   res.status(200).json("Admin Routes Has Been Accessed");
});

export { router as AdminRouter };