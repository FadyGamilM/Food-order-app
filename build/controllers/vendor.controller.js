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
exports.getAllMealsController = exports.addNewMealController = exports.updateVendorServicesController = exports.UpdateVendorProfileController = exports.getVendorProfile = exports.LoginController = void 0;
const vendor_service_1 = require("../services/vendor.service");
//! => Login Controller 
const LoginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the request body
    let loginRequest = req.body;
    //* call the service for business logic processing 
    let result = yield (0, vendor_service_1.Login)(loginRequest);
    //* return the response
    return res.status(200).json({ "data": result });
});
exports.LoginController = LoginController;
//! => for authorization 
const getVendorProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the authorized user from the headers
    const authorizedUserPayload = req.user;
    //* call the service business logic to extract this user from db 
    if ((authorizedUserPayload === null || authorizedUserPayload === void 0 ? void 0 : authorizedUserPayload.id) === undefined) {
        return res.status(403).json({
            "error": "vendor is not authorized"
        });
    }
    const existingVendor = yield (0, vendor_service_1.GetVendorById)(authorizedUserPayload === null || authorizedUserPayload === void 0 ? void 0 : authorizedUserPayload.id);
    //* return the response
    if (existingVendor)
        return res.status(200).json({ "data": existingVendor });
    else
        return res.status(403).json({ "error": "user is not authorized" });
});
exports.getVendorProfile = getVendorProfile;
//! => vendor can update his/her profile only
const UpdateVendorProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // ==> check if the current logged-in vendor is the one who owns this profile (authority checking)
    //* extract the authorized user from the headers
    const authorizedVendorPayload = req.user;
    if (authorizedVendorPayload === undefined) {
        return res.status(403).json({
            "error": "vendor is not authorized"
        });
    }
    //* extract the updated vendor profile from the body of the request to persist the new updates
    let updatedProfile = req.body.updatedProfile;
    //* call the service business logic to update this profile with the new updates
    let response = yield (0, vendor_service_1.UpdateVendorProfile)(updatedProfile, authorizedVendorPayload.id);
    //* return the response
    if (response !== null)
        return res.status(200).json({ "data": response });
    else
        return res.status(500).json({ "error": "server error !" });
});
exports.UpdateVendorProfileController = UpdateVendorProfileController;
// vendor can update his/her provided services
const updateVendorServicesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // ==> check if the current logged-in vendor is the one who owns this profile (authority checking)
    //* extract the authorized user from the headers
    const authorizedVendorPayload = req.user;
    if (authorizedVendorPayload === undefined) {
        return res.status(403).json({
            "error": "vendor is not authorized"
        });
    }
    //* fetch this vendor from db and check that this vendor exists
    const existingVendor = yield (0, vendor_service_1.GetVendorById)(authorizedVendorPayload === null || authorizedVendorPayload === void 0 ? void 0 : authorizedVendorPayload.id);
    if (existingVendor === null)
        return res.status(400).json({ "error": "user not found with given id " });
    //* call the business logic to update the service
    const updatedVendor = yield (0, vendor_service_1.UpdateVendorServiceAvailability)(existingVendor === null || existingVendor === void 0 ? void 0 : existingVendor.id);
    //* return the response 
    if (!updatedVendor)
        return res.status(500).json({ "error": "server error !!" });
    else
        return res.status(200).json({ "data": updatedVendor });
});
exports.updateVendorServicesController = updateVendorServicesController;
const addNewMealController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // ==> check if the current logged-in vendor is the one who owns this profile (authority checking)
    //* extract the authorized user from the headers
    const authorizedVendorPayload = req.user;
    if (authorizedVendorPayload === undefined) {
        return res.status(403).json({
            "error": "vendor is not authorized"
        });
    }
    //* get the new meal from the request body 
    let meal = req.body.meal;
    //* call the service business logic to add the new meal to this vendor 
    const addedMeal = yield (0, vendor_service_1.AddNewMeal)(authorizedVendorPayload === null || authorizedVendorPayload === void 0 ? void 0 : authorizedVendorPayload.id, meal);
    //* return response
    if (!addedMeal)
        return res.status(500).json({ "error": "server error !!" });
    else
        return res.status(201).json({ "data": addedMeal });
});
exports.addNewMealController = addNewMealController;
const getAllMealsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the payload from the request after authorization middleware
    const authorizedVendorPayload = req.user;
    //* check if authorized 
    if (authorizedVendorPayload === undefined)
        return res.status(403).json({ "data": "user is not authorized" });
    //* call the business logic service to get all meals created by this vendor 
    let meals = yield (0, vendor_service_1.GetAllMeals)(authorizedVendorPayload.id);
    //* return the response 
    return res.status(200).json({ "data": meals });
});
exports.getAllMealsController = getAllMealsController;
//# sourceMappingURL=vendor.controller.js.map