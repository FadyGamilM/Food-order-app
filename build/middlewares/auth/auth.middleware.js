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
exports.Authorize = void 0;
const PasswordEncryption_1 = require("../../utility/PasswordEncryption");
//! => this middleware simply authorize the client before handling any action and executing the request and giving some response  
const Authorize = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isValidSignature = yield (0, PasswordEncryption_1.ValidateSignature)(req);
    if (isValidSignature) {
        //* call the next handler
        next();
    }
    else {
        //* notify the client app that this user is not authorized
        return res.status(401).json({
            "error": "user is not authenticated !"
        });
    }
});
exports.Authorize = Authorize;
//# sourceMappingURL=auth.middleware.js.map