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
exports.GetOTPController = exports.VerifyCustomerAccountController = exports.UpdateCustomerProfileController = exports.GetCustomerProfileController = exports.LoginCustomerController = exports.SignupController = void 0;
const services_1 = require("../services");
const ConsoleLogger_1 = require("../utility/ConsoleLogger");
const SignupController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* call the service layer
    const response = yield (0, services_1.signupCustomer)(req.body);
    //* send the response 
    if (response === null)
        return res.status(500).json({ "error": "Server error !!" });
    return res.status(201).json({ "data": response });
});
exports.SignupController = SignupController;
const LoginCustomerController = (req, res, neext) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the request body 
    const loginDto = req.body;
    //* call the service business logic
    const response = yield (0, services_1.LoginCustomer)(loginDto);
    //* return the response
    if (response === null)
        return res.status(401).json({ "error": "invalid credentials" });
    else
        return res.status(200).json({ "data": response });
});
exports.LoginCustomerController = LoginCustomerController;
const GetCustomerProfileController = (req, res, neext) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the authorized customer from the req
    const customerPayload = req.user;
    if (!customerPayload)
        return res.status(403).json({ "error": "Not Authorized " });
    //* call the service layer's business logic
    let response = yield (0, services_1.GetCustomerProfile)(customerPayload);
    if (!response)
        return res.status(500).json({ "error": "Server error !!" });
    //* convert the response to the getDto 
    let customerDto = {
        id: response === null || response === void 0 ? void 0 : response.id,
        email: response === null || response === void 0 ? void 0 : response.email,
        phone: response === null || response === void 0 ? void 0 : response.phone,
        isVerified: response === null || response === void 0 ? void 0 : response.isVerified,
        username: response === null || response === void 0 ? void 0 : response.username
    };
    //* return the response
    return res.status(200).json({ "data": customerDto });
});
exports.GetCustomerProfileController = GetCustomerProfileController;
const UpdateCustomerProfileController = (req, res, neext) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the authorized customer from the req
    const customerPayload = req.user;
    if (!customerPayload)
        return res.status(403).json({ "error": "Not Authorized " });
    //* extract the updated customer data from the request body 
    const updatedInfo = req.body;
    (0, ConsoleLogger_1.Log)("heree");
    //* call the service layer's business logic 
    let response = yield (0, services_1.UpdateCustomerProfile)(customerPayload, updatedInfo);
    if (!response)
        return res.status(500).json({ "error": "Server error !!" });
    //* convert the response to the getDto 
    let customerDto = {
        id: response === null || response === void 0 ? void 0 : response.id,
        email: response === null || response === void 0 ? void 0 : response.email,
        phone: response === null || response === void 0 ? void 0 : response.phone,
        isVerified: response === null || response === void 0 ? void 0 : response.isVerified,
        username: response === null || response === void 0 ? void 0 : response.username
    };
    //* return the response
    return res.status(200).json({ "data": customerDto });
});
exports.UpdateCustomerProfileController = UpdateCustomerProfileController;
const VerifyCustomerAccountController = (req, res, neext) => __awaiter(void 0, void 0, void 0, function* () {
    //* get the data from the request
    const otp = (req.body.otp);
    const customerPayload = req.user;
    if (customerPayload === null || customerPayload === undefined)
        return res.status(401).json({ "error": "user not authenticated" });
    //* call the business logic
    let response = yield (0, services_1.VerifyCustomerAccount)(customerPayload, otp);
    //* return the response
    if (response === null)
        return res.status(403).json({ "error": "not verified" });
    else {
        let customerDto = { email: response.email, id: response.id, username: response.username, isVerified: response.isVerified, phone: response.phone };
        return res.status(200).json({ "data": customerDto });
    }
});
exports.VerifyCustomerAccountController = VerifyCustomerAccountController;
const GetOTPController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* get the user from the req after passing the authorization middleware
    const customer = req.user;
    if (!customer)
        return res.status(401).json({ "error": "Not Authenticated" });
    //* call the bsuniess logic service
    const response = yield (0, services_1.RequestNewOtpService)(customer);
    //* return the response
    if (response === null)
        return res.status(400).json({ "error": "bad request" });
    else
        return res.status(200).json({ "data": response });
});
exports.GetOTPController = GetOTPController;
//# sourceMappingURL=customer.controller.js.map