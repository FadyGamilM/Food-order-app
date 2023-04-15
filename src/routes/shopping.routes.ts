import { Router, Request, Response, NextFunction } from "express";
import { GetAllVendorsController, GetAvailableVendorsController, GetTopRatingVendorsController, GetVendorMealsUnderSpecificTimeController, } from "../controllers";

const router = Router();

//* customer can retrieve all vendors (resturants)
router.get("/vendors", GetAllVendorsController);

//* customer can view the top rating resturants
router.get("/top-rating-vendors", GetTopRatingVendorsController);

git add//* customer can view the meals servced by specific resturan in less than specific time
router.get("/:pinCode/served-meals-in-time", GetVendorMealsUnderSpecificTimeController);

//* customer can view all resturants (vendors) who are currently avilable
router.get("/available-vendors", GetAvailableVendorsController);

router.get("/", (req, res, next) =>
{
   return res.status(200).json("hello from the shopping routes");
});

export
{
   router as ShoppingRouter
};