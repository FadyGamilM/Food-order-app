import { NextFunction, Request, Response, Router } from "express";
import { LoginController, UpdateVendorProfileController, getVendorProfile, updateVendorServicesController, addNewMealController, getAllMealsController } from "../controllers";
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

//* vendor can list all his/her provided  meals
router.post("/meals", Authorize, addNewMealController);

//* vendor can add a new meal to be served for clients
router.get("/meals", Authorize, getAllMealsController);

router.get("/", (req: Request, res: Response, next: NextFunction) =>
{
   res.status(200).json("Vendors Routes Has Been Accessed");
});

export
{
   router as VendorRoutes
};