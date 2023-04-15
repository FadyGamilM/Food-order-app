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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateSignature = exports.GenerateSignature = exports.ValidateLoginPassword = exports.EncryptPassword = exports.generateSalt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// TODO => hide it later in a secret key manager
const APP_SECRET = "my_app_secret";
const generateSalt = () => __awaiter(void 0, void 0, void 0, function* () {
    let salt = yield bcrypt_1.default.genSalt();
    return salt;
});
exports.generateSalt = generateSalt;
//! Encrypt given password using given salt
const EncryptPassword = (password, salt) => __awaiter(void 0, void 0, void 0, function* () {
    let encryptedPass = yield bcrypt_1.default.hash(password, salt);
    return encryptedPass;
});
exports.EncryptPassword = EncryptPassword;
//! validate the username and password info to authenticate the user
const ValidateLoginPassword = (loginPass, savedPass, savedSalt) => __awaiter(void 0, void 0, void 0, function* () {
    // hash the given pass while login
    let hashedPass = yield (0, exports.EncryptPassword)(loginPass, savedSalt);
    // compare if they the same and return the response
    let comparisonResult = hashedPass === savedPass ? true : false;
    // return the response to the controller
    return comparisonResult;
});
exports.ValidateLoginPassword = ValidateLoginPassword;
//! to create the signature (hashed user info) for later authorization 
const GenerateSignature = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return jsonwebtoken_1.default.sign(payload, APP_SECRET, { expiresIn: "5d" });
});
exports.GenerateSignature = GenerateSignature;
//! to validate the given signature to know who is this user 
// 1) extract signature -> 2) decrypt it to verify that this signature is encrypted by our server -> 3) attach this user payload into the request headers for other handlers
const ValidateSignature = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //* extract the signature from the headers of the request
    const signature = (_a = req.get("authorization")) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (signature) {
        //*  so we need to verify who is this user ?
        let authorizedUserPayload = yield jsonwebtoken_1.default.verify(signature, APP_SECRET);
        //* now assign the user to the request to be accessed in the next requests handlers
        req.user = authorizedUserPayload;
        //* and return the response to the handler
        return true;
    }
    return false;
});
exports.ValidateSignature = ValidateSignature;
//# sourceMappingURL=PasswordEncryption.js.map