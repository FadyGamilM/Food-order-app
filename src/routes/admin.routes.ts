import express, { NextFunction, Router, Request, Response } from "express";

// instantiate the router instance
const router: Router = Router();

router.get("/vendors/list",);

router.get("/", (req: Request, res: Response, next: NextFunction) =>
{
   res.status(200).json("Admin Routes Has Been Accessed");
});

export { router as AdminRouter };