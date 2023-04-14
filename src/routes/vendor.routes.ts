import { NextFunction, Request, Response, Router } from "express";
import { LoginController, UpdateVendorProfileController, getVendorProfile, updateVendorServicesController } from "../controllers";
import { Authorize } from "../middlewares";

const router: Router = Router();

//* vendor can login
router.post("/login", LoginController);

//* get the vendor profile info for authorization staff
router.get("/profile", Authorize, getVendorProfile);

//* update the vendor profile
router.patch("/profile", Authorize, UpdateVendorProfileController);

//* update vendor's provided services
router.patch("/services", Authorize, updateVendorServicesController);

router.get("/", (req: Request, res: Response, next: NextFunction) =>
{
   res.status(200).json("Vendors Routes Has Been Accessed");
});

export
{
   router as VendorRoutes
};