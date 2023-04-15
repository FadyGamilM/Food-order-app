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
exports.UpdateCustomerProfile = exports.GetCustomerProfile = exports.RequestNewOtpService = exports.LoginCustomer = exports.VerifyCustomerAccount = exports.signupCustomer = void 0;
const process_1 = require("process");
const ConsoleLogger_1 = require("../utility/ConsoleLogger");
const prisma_service_1 = require("./prisma.service");
const GenerateOTP_1 = require("../utility/GenerateOTP");
const PasswordEncryption_1 = require("../utility/PasswordEncryption");
const twilio_service_1 = require("./twilio.service");
const signupCustomer = (customerDto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //* validate this dto
        if (customerDto.email === "" || customerDto.password === "" || customerDto.username === "" || customerDto.phone === "")
            return null;
        //* check if there is any user in db with this email 
        let isEmailExistsBefore = yield prisma_service_1.db.customer.findUnique({ where: { email: customerDto.email } });
        if (isEmailExistsBefore !== null)
            return null;
        //* generate otp for this user 
        let otp_info = (0, GenerateOTP_1.generateOTP)();
        (0, ConsoleLogger_1.Log)(`${otp_info.otp}`);
        (0, ConsoleLogger_1.Log)(`${otp_info.opt_expiry}`);
        //* generate salt and hash the password 
        let salt = yield (0, PasswordEncryption_1.generateSalt)();
        let ecnryptedPass = yield (0, PasswordEncryption_1.EncryptPassword)(customerDto.password, salt);
        //* persist the new entity
        const newCustomer = yield prisma_service_1.db.customer.create({
            data: {
                email: customerDto.email,
                password: ecnryptedPass,
                salt: salt,
                otp: otp_info.otp,
                otp_expiry: otp_info.opt_expiry,
                username: customerDto.username,
                isVerified: false,
                phone: customerDto.phone
            }
        });
        //* check if anything happended during the persistence operation 
        if (newCustomer === null)
            return null;
        //* send an otp notification to the customer mobile
        yield (0, twilio_service_1.RequestOTP)(newCustomer.otp, newCustomer.phone);
        //* generate a signature containing this customer payload 
        let payload = {
            id: newCustomer.id,
            email: newCustomer.email,
            isVerified: newCustomer.isVerified,
            phone: newCustomer.phone,
            username: newCustomer.username
        };
        const paylaodSIgnature = yield (0, PasswordEncryption_1.GenerateSignature)(payload);
        //* send back the response to the controller 
        return paylaodSIgnature;
    }
    catch (err) {
        (0, ConsoleLogger_1.Log)(err.message);
        (0, process_1.exit)(1);
    }
    finally {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            //* close the db tcp connection 
            yield prisma_service_1.db.$disconnect();
        }))();
    }
});
exports.signupCustomer = signupCustomer;
const VerifyCustomerAccount = (customerPayload, otp) => __awaiter(void 0, void 0, void 0, function* () {
    //* validation check
    const customer = yield prisma_service_1.db.customer.findUnique({ where: { id: customerPayload.id } });
    if (customer === null)
        return customer; // TODO => customize the returns with myCustomStatusCode later
    (0, ConsoleLogger_1.Log)(`${otp - customer.otp}`);
    //* check the opt_expiry date validity .. 
    if (otp == customer.otp) {
        let expiryDate = customer.otp_expiry;
        let isValid = (Number(expiryDate) - Date.now()) > 0 ? true : false;
        if (isValid) {
            let verifiedCustomer = yield prisma_service_1.db.customer.update({ where: { id: customer.id }, data: { isVerified: true } });
            return verifiedCustomer;
        }
        else
            return null;
    }
    else {
        return null;
    }
});
exports.VerifyCustomerAccount = VerifyCustomerAccount;
const LoginCustomer = (loginDto) => __awaiter(void 0, void 0, void 0, function* () {
    //* check if there is any user in the datbase with this email
    const customerExists = yield prisma_service_1.db.customer.findUnique({ where: { email: loginDto.email } });
    if (customerExists === null)
        return null;
    //* hash the pass using the same saved salt
    let hashedPass = yield (0, PasswordEncryption_1.EncryptPassword)(loginDto.password, customerExists.salt);
    //* compare the passwords to verify the credentials 
    if (hashedPass === customerExists.password) {
        //* generate the signature and return the result to the controller to return the response 
        let customerPayload = {
            email: customerExists.email,
            id: customerExists.id,
            isVerified: customerExists.isVerified,
            phone: customerExists.phone,
            username: customerExists.phone
        };
        let paylaodSignature = yield (0, PasswordEncryption_1.GenerateSignature)(customerPayload);
        return paylaodSignature;
    }
    else {
        return null;
    }
});
exports.LoginCustomer = LoginCustomer;
const RequestNewOtpService = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    //* check if this customer really in db or not 
    let existingCustomer = yield prisma_service_1.db.customer.findUnique({ where: { email: customer.email } });
    if (!existingCustomer)
        return null;
    //* generate a new otp and otp_expiry
    const otpInfo = (0, GenerateOTP_1.generateOTP)();
    //* update the customer info and persist this updated customer into the database 
    let updatedCustomer = yield prisma_service_1.db.customer.update({
        where: { id: existingCustomer.id }, data: {
            otp: otpInfo.otp, otp_expiry: otpInfo.opt_expiry
        }
    });
    //* send this otp number to the customer phone 
    yield (0, twilio_service_1.RequestOTP)(updatedCustomer.otp, updatedCustomer.phone);
    //* return the updated customer signature to the controller to send the response 
    let customerPaylaod = {
        id: updatedCustomer.id,
        email: updatedCustomer.email,
        username: updatedCustomer.username,
        phone: updatedCustomer.phone,
        isVerified: updatedCustomer.isVerified
    };
    return yield (0, PasswordEncryption_1.GenerateSignature)(customerPaylaod);
});
exports.RequestNewOtpService = RequestNewOtpService;
const GetCustomerProfile = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    //* check if this customer really in db or not 
    let existingCustomer = yield prisma_service_1.db.customer.findUnique({ where: { email: customer.email } });
    if (!existingCustomer)
        return null;
    return existingCustomer;
});
exports.GetCustomerProfile = GetCustomerProfile;
const UpdateCustomerProfile = (customer, updatedCustomerProfile) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    //* check if this customer in db or not
    let existingCustomer = yield prisma_service_1.db.customer.findUnique({ where: { email: customer.email } });
    if (!existingCustomer)
        return null;
    //* update the customer info 
    const updatedCustomer = yield prisma_service_1.db.customer.update({
        where: { id: customer.id },
        data: {
            username: (_a = updatedCustomerProfile.username) !== null && _a !== void 0 ? _a : existingCustomer.username,
            phone: (_b = updatedCustomerProfile.phone) !== null && _b !== void 0 ? _b : existingCustomer.phone
        }
    });
    //* return to the controller the updated customer 
    return updatedCustomer;
});
exports.UpdateCustomerProfile = UpdateCustomerProfile;
//# sourceMappingURL=customer.service.js.map