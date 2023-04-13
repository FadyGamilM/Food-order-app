import { NextFunction, Request, Response, Router } from "express";
import { LoginController } from "../controllers";

const router: Router = Router();

// vendor can login
router.post("/login", LoginController);


// get the vendor profile info for authorization staff

// update the vendor profile

router.get("/", (req: Request, res: Response, next: NextFunction) =>
{
   res.status(200).json("Vendors Routes Has Been Accessed");
});
export
{
   router as VendorRoutes
};