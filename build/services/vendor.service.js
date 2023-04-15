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
exports.GetAllMeals = exports.AddNewMeal = exports.UpdateVendorServiceAvailability = exports.UpdateVendorProfile = exports.GetVendorById = exports.Login = void 0;
const ConsoleLogger_1 = require("../utility/ConsoleLogger");
const PasswordEncryption_1 = require("../utility/PasswordEncryption");
const prisma_service_1 = require("./prisma.service");
const Login = (loginRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get the vendor from the db using the given email
        let existingVendor = yield prisma_service_1.db.vendor.findUnique({ where: { email: loginRequest.email } });
        // check if this vendor exists 
        if (existingVendor === null)
            return null;
        // check if the credentials are valid
        let isValidCredentials = yield (0, PasswordEncryption_1.ValidateLoginPassword)(loginRequest.password, existingVendor.password, existingVendor.salt);
        // get a signature for this user for later use in other endpoints actions
        const payload = {
            id: existingVendor.id,
            brandName: existingVendor.brandName,
            email: existingVendor.email,
            ownerName: existingVendor.ownerName,
            foodType: (existingVendor.foodType)
        };
        // generaet a signature based on this payload (simply hash the data of this user)
        const signature = yield (0, PasswordEncryption_1.GenerateSignature)(payload);
        // return the result to the controller
        return isValidCredentials === true ? signature : null;
    }
    catch (err) {
        (0, ConsoleLogger_1.Log)(err.message);
    }
    finally {
        yield prisma_service_1.db.$disconnect();
    }
});
exports.Login = Login;
const GetVendorById = (vendorId) => __awaiter(void 0, void 0, void 0, function* () {
    // get the vendor from db
    const existingVendor = yield prisma_service_1.db.vendor.findUnique({
        where: { id: vendorId }
    });
    // return the result
    return existingVendor;
});
exports.GetVendorById = GetVendorById;
const UpdateVendorProfile = (updatedProfile, authorizedVendorId) => __awaiter(void 0, void 0, void 0, function* () {
    //* extract the profile to be updated from the database to update it 
    const oldVendor = yield prisma_service_1.db.vendor.findUnique({ where: { id: authorizedVendorId } });
    //* check if there is any profile with this id
    if (oldVendor === null)
        return null;
    //* update the vendor
    const updated = yield prisma_service_1.db.vendor.update({
        where: {
            id: authorizedVendorId
        },
        data: {
            address: (updatedProfile.address !== undefined && updatedProfile.address !== null) ? updatedProfile.address : oldVendor.address,
            brandName: (updatedProfile.brandName !== undefined && updatedProfile.brandName !== null) ? updatedProfile.brandName : oldVendor.brandName,
            ownerName: (updatedProfile.ownerName !== undefined && updatedProfile.ownerName !== null) ? updatedProfile.ownerName : oldVendor.ownerName,
            // foodType: (updatedProfile.foodType !== undefined && updatedProfile.foodType !== null) ? oldVendor.foodType.push(updatedProfile.foodType) : oldVendor.foodType,
            phone: (updatedProfile.phone !== undefined && updatedProfile.phone !== null) ? updatedProfile.phone : oldVendor.phone,
            isServiceAvailable: (updatedProfile.isServiceAvailable !== undefined && updatedProfile.isServiceAvailable !== null) ? updatedProfile.isServiceAvailable : oldVendor.isServiceAvailable,
        }
    });
    return updated;
});
exports.UpdateVendorProfile = UpdateVendorProfile;
const UpdateVendorServiceAvailability = (authorizedVendorId) => __awaiter(void 0, void 0, void 0, function* () {
    const existingVendor = yield prisma_service_1.db.vendor.findUnique({ where: { id: authorizedVendorId } });
    if (!existingVendor)
        return null;
    return yield prisma_service_1.db.vendor.update({
        where: {
            id: existingVendor.id
        },
        data: {
            isServiceAvailable: !existingVendor.isServiceAvailable
        }
    });
});
exports.UpdateVendorServiceAvailability = UpdateVendorServiceAvailability;
const AddNewMeal = (vendorId, meal) => __awaiter(void 0, void 0, void 0, function* () {
    //* get the vendor from db
    let existingVendor = yield prisma_service_1.db.vendor.findUnique({
        where: {
            id: vendorId
        },
        include: {
            meals: true
        }
    });
    //* validate that this vendor exists
    if (existingVendor === null)
        return null;
    //* add this meal into the vendor instance 
    let createdMeal = yield prisma_service_1.db.meal.create({
        data: {
            vendorId: existingVendor.id,
            category: meal.category,
            mealName: meal.mealName,
            type: meal.type,
            timeToBeReady: meal.timeToBeReady,
            rating: 0.0
        }
    });
    existingVendor.meals.push(createdMeal);
    //* return the created meal
    return createdMeal;
});
exports.AddNewMeal = AddNewMeal;
const GetAllMeals = (vendorId) => __awaiter(void 0, void 0, void 0, function* () {
    //* get this vendor from the datbase
    let existingVendor = yield prisma_service_1.db.vendor.findUnique({ where: { id: vendorId }, include: { meals: true } });
    //* extract all the meals to be returnred
    return existingVendor === null || existingVendor === void 0 ? void 0 : existingVendor.meals;
});
exports.GetAllMeals = GetAllMeals;
//# sourceMappingURL=vendor.service.js.map