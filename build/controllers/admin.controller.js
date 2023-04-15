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
exports.getVendorByIdController = exports.getVendorsController = exports.createVendorController = void 0;
const services_1 = require("../services");
const createVendorController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* get the data from the request body
    const vendor = req.body;
    //* call the database service to persist the new vendor entity
    let createdVendor = yield (0, services_1.createVendor)(vendor);
    //* return the response 
    return res.status(201).json({ "res": createdVendor });
});
exports.createVendorController = createVendorController;
const getVendorsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* call the service busniess logic
    let vendors = yield (0, services_1.getVendors)();
    //* return the response
    return res.status(200).json({
        "data": vendors
    });
});
exports.getVendorsController = getVendorsController;
const getVendorByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the request data
    if (req.params.id === null) {
        return res.status(400).json({
            "error": "bad request"
        });
    }
    //* call the business logic service method
    let vendor = yield (0, services_1.getVendorById)(parseInt(req.params.id));
    //* return the response
    if (vendor === null)
        return res.status(404).json("no vendor is found with specified id");
    return res.status(200).json({
        "data": vendor
    });
});
exports.getVendorByIdController = getVendorByIdController;
//# sourceMappingURL=admin.controller.js.map