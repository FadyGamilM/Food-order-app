"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUstomerRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.CUstomerRouter = router;
router.post("/signup", controllers_1.SignupController);
router.post("/login", controllers_1.LoginCustomerController);
router.get("/profile", middlewares_1.Authorize, controllers_1.GetCustomerProfileController);
router.patch("/profile", middlewares_1.Authorize, controllers_1.UpdateCustomerProfileController);
//* to verify the customer account based on the received otp 
router.patch("/verify", middlewares_1.Authorize, controllers_1.VerifyCustomerAccountController);
router.get("/otp", middlewares_1.Authorize, controllers_1.GetOTPController);
//# sourceMappingURL=customer.routes.js.map