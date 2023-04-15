"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAvailableVendorsController = exports.GetVendorMealsUnderSpecificTimeController = exports.GetTopRatingVendorsController = exports.GetAllVendorsController = void 0;
const services_1 = require("../services");
//* customer can retrieve all vendors (resturants)
const GetAllVendorsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* call the service layer
    const vendors = yield (0, services_1.GetAllVendors)();
    //* return the response
    return res.status(200).json({ "data": vendors });
});
exports.GetAllVendorsController = GetAllVendorsController;
//* customer can view the top rating resturants
const GetTopRatingVendorsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* call the service layer
    let topRatingVendors = yield (0, services_1.GetTopRatingVendors)(5);
    //* return the response
    return res.status(200).json({ "data": topRatingVendors });
});
exports.GetTopRatingVendorsController = GetTopRatingVendorsController;
//* customer can view the meals servced by specific resturan in less than specific time
const GetVendorMealsUnderSpecificTimeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract data from the body of the request 
    let duration = parseInt(req.body.duration);
    //* extract the vendor pinCode "location"
    let pinCode = req.params.pinCode;
    //* call the service layer 
    let mealsUnderDuration = yield (0, services_1.GetVendorMealsUnderSpecificTime)(duration, pinCode);
    //* return the response 
    return res.status(200).json({ "data": mealsUnderDuration });
});
exports.GetVendorMealsUnderSpecificTimeController = GetVendorMealsUnderSpecificTimeController;
//* customer can view all resturants (vendors) who are currently avilable
const GetAvailableVendorsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* call the service layer
    let vendors = yield (0, services_1.GetAvailableVendors)();
    //* return the response 
    return res.status(200).json({ "data": vendors });
});
exports.GetAvailableVendorsController = GetAvailableVendorsController;
//# sourceMappingURL=shopping.controller.js.map