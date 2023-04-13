import express, { NextFunction, Router, Request, Response } from "express";
import { createVendorController, getVendorByIdController, getVendorsController } from "../controllers";

// instantiate the router instance
const router: Router = Router();

router.get("/vendors/list", getVendorsController);
router.post("/vendors/new", createVendorController);
router.get("/vendors/:id", getVendorByIdController);

router.get("/", (req: Request, res: Response, next: NextFunction) =>
{
   res.status(200).json("Admin Routes Has Been Accessed");
});

export { router as AdminRouter };