import { Router } from "express";
import { Authorize } from "../middlewares";
import { SignupController, LoginCustomerController, VerifyCustomerAccountController, UpdateCustomerProfileController, GetCustomerProfileController, GetOTPController } from "../controllers";


const router = Router();

router.post("/signup", SignupController);

router.post("/login", LoginCustomerController);

router.get("/profile", Authorize, GetCustomerProfileController);

router.patch("/profile", Authorize, UpdateCustomerProfileController);

//* to verify the customer account based on the received otp 
router.patch("/verify", Authorize, VerifyCustomerAccountController);

router.get("/otp", GetOTPController);

export
{
   router as CUstomerRouter
};