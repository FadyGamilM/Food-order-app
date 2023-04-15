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
exports.getVendorById = exports.getVendors = exports.createVendor = void 0;
const prisma_service_1 = require("./prisma.service");
const ConsoleLogger_1 = require("../utility/ConsoleLogger");
const PasswordEncryption_1 = require("../utility/PasswordEncryption");
const client_1 = require("../../prisma/client");
//! => create new vendor
const createVendor = (vendorDto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generatedSalt = yield (0, PasswordEncryption_1.generateSalt)();
        const encryptedPass = yield (0, PasswordEncryption_1.EncryptPassword)(vendorDto.password, generatedSalt);
        //* convert the foodTypes provided by the clients via the dto into the enum type generated via prisma client 
        let foodTypes = vendorDto.foodType.map(type => client_1.FoodType[type]);
        let newVendor = yield prisma_service_1.db.vendor.create({
            data: {
                brandName: vendorDto.brandName,
                email: vendorDto.email,
                ownerName: vendorDto.ownerName,
                password: encryptedPass,
                salt: generatedSalt,
                phone: vendorDto.phone,
                pinCode: vendorDto.pinCode,
                isServiceAvailable: vendorDto.isServiceAvailable,
                address: vendorDto.address,
                foodType: foodTypes,
            }
        });
        return newVendor;
    }
    catch (err) {
        (0, ConsoleLogger_1.Log)(err.message);
    }
    finally {
        yield prisma_service_1.db.$disconnect();
    }
});
exports.createVendor = createVendor;
//! => get all vendors
const getVendors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let vendors = yield prisma_service_1.db.vendor.findMany();
        return vendors;
    }
    catch (err) {
        (0, ConsoleLogger_1.Log)(err.message);
    }
    finally {
        yield prisma_service_1.db.$disconnect();
    }
});
exports.getVendors = getVendors;
//! => get vendor by id 
const getVendorById = (vendorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let vendor = yield prisma_service_1.db.vendor.findFirst({
            where: {
                id: vendorId
            }
        });
        // return vendor and if its null the controller will handle this by responding with the appropriate response
        return vendor;
    }
    catch (err) {
        (0, ConsoleLogger_1.Log)(err.message);
    }
    finally {
        yield prisma_service_1.db.$disconnect();
    }
});
exports.getVendorById = getVendorById;
//# sourceMappingURL=admin.service.js.map