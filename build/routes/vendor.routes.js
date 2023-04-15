"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
exports.VendorRoutes = router;
//* vendor can login
router.post("/login", controllers_1.LoginController);
//* get the vendor profile info for authorization staff
router.get("/profile", middlewares_1.Authorize, controllers_1.getVendorProfile);
//* update the vendor profile
router.patch("/profile", middlewares_1.Authorize, controllers_1.UpdateVendorProfileController);
//* update vendor's provided services
router.patch("/services", middlewares_1.Authorize, controllers_1.updateVendorServicesController);
//* vendor can list all his/her provided  meals
router.post("/meals", middlewares_1.Authorize, controllers_1.addNewMealController);
//* vendor can add a new meal to be served for clients
router.get("/meals", middlewares_1.Authorize, controllers_1.getAllMealsController);
router.get("/", (req, res, next) => {
    res.status(200).json("Vendors Routes Has Been Accessed");
});
//# sourceMappingURL=vendor.routes.js.map