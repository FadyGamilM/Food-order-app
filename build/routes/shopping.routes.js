"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.ShoppingRouter = router;
//* customer can retrieve all vendors (resturants)
router.get("/vendors", controllers_1.GetAllVendorsController);
//* customer can view the top rating resturants
router.get("/top-rating-vendors", controllers_1.GetTopRatingVendorsController);
//* customer can view the meals servced by specific resturan in less than specific time
router.get("/:pinCode/served-meals-in-time", controllers_1.GetVendorMealsUnderSpecificTimeController);
//* customer can view all resturants (vendors) who are currently avilable
router.get("/available-vendors", controllers_1.GetAvailableVendorsController);
router.get("/", (req, res, next) => {
    return res.status(200).json("hello from the shopping routes");
});
//# sourceMappingURL=shopping.routes.js.map