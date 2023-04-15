"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
// instantiate the router instance
const router = (0, express_1.Router)();
exports.AdminRouter = router;
router.get("/vendors/list", controllers_1.getVendorsController);
router.post("/vendors/new", controllers_1.createVendorController);
router.get("/vendors/:id", controllers_1.getVendorByIdController);
router.get("/", (req, res, next) => {
    res.status(200).json("Admin Routes Has Been Accessed");
});
//# sourceMappingURL=admin.routes.js.map