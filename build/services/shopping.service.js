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
exports.GetAvailableVendors = exports.GetVendorMealsUnderSpecificTime = exports.GetTopRatingVendors = exports.GetAllVendors = void 0;
const prisma_service_1 = require("./prisma.service");
const GetAllVendors = () => __awaiter(void 0, void 0, void 0, function* () {
    const vendors = yield prisma_service_1.db.vendor.findMany({
        include: {
            meals: true,
            _count: true
        }
    });
    return vendors;
});
exports.GetAllVendors = GetAllVendors;
const GetTopRatingVendors = (numOfVendors = 10) => __awaiter(void 0, void 0, void 0, function* () {
    let vendors = yield prisma_service_1.db.vendor.findMany({
        take: numOfVendors,
        skip: 0,
        orderBy: {
            rating: "desc"
        },
        where: {
            rating: {
                gte: 4
            }
        },
        include: {
            _count: true,
            meals: true
        }
    });
    return vendors;
});
exports.GetTopRatingVendors = GetTopRatingVendors;
const GetVendorMealsUnderSpecificTime = (duration, location) => __awaiter(void 0, void 0, void 0, function* () {
    //* get this vendor and populate its meals 
    let vendor = yield prisma_service_1.db.vendor.findFirst({
        where: {
            AND: {
                pinCode: location,
                isServiceAvailable: true // for sure users look for meals in less than 30 mins, so we have to return only the available service only 
            }
        },
        include: {
            _count: true,
            meals: true
        }
    });
    if (vendor === null)
        return null;
    //* filter the meals based on the duration for being ready
    let meals = [];
    meals.push(...vendor.meals.filter(meal => meal.timeToBeReady <= duration));
    //* return the response
    return meals;
});
exports.GetVendorMealsUnderSpecificTime = GetVendorMealsUnderSpecificTime;
const GetAvailableVendors = () => __awaiter(void 0, void 0, void 0, function* () {
    //* get all available vendors 
    let vendors = yield prisma_service_1.db.vendor.findMany({ where: { isServiceAvailable: true } });
    //* return the response 
});
exports.GetAvailableVendors = GetAvailableVendors;
//# sourceMappingURL=shopping.service.js.map