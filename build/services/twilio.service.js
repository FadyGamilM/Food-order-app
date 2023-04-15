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
exports.RequestOTP = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const twilio_1 = __importDefault(require("twilio"));
dotenv_1.default.config();
const RequestOTP = (otp, toPhoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    //* get the secrets from the twilio service 
    const twilio_sid = process.env["TWILIO_ACC_SID"];
    const twilio_auth_token = process.env["TWILIO_AUTH_TOKEN"];
    const twilio_my_phone_number = process.env["TWILIO_MY_PHONE_NUM"];
    //* instantiate twilio client 
    const client = (0, twilio_1.default)(twilio_sid, twilio_auth_token);
    //* make a request via this client 
    const twilio_response = yield client.messages.create({
        body: `your OTP is ${otp}`,
        from: `${twilio_my_phone_number}`,
        to: `+20${toPhoneNumber}`
    });
    return;
});
exports.RequestOTP = RequestOTP;
//# sourceMappingURL=twilio.service.js.map