import { NextFunction, Request, Response, Router } from "express";
import { LoginController, UpdateVendorProfile, getVendorProfile, updateVendorServices } from "../controllers";

const router: Router = Router();

//* vendor can login
router.post("/login", LoginController);

//* get the vendor profile info for authorization staff
router.get("/profile", getVendorProfile);

//* update the vendor profile
router.patch("/profile", UpdateVendorProfile);

//* update vendor's provided services
router.post("/services", updateVendorServices);

router.get("/", (req: Request, res: Response, next: NextFunction) =>
{
   res.status(200).json("Vendors Routes Has Been Accessed");
});

export
{
   router as VendorRoutes
};