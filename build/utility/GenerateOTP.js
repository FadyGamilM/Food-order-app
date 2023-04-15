"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = void 0;
const generateOTP = () => {
    // we need to generate 6 digits number for the otp 
    let OTP = Math.floor((100000) + (Math.random() * 900000));
    // then we need to set its expiry date to be 60 mins after the generation time
    let OTP_expiry_date = new Date().setTime(Date.now() + (60 * 60 * 1000));
    // return the otp object to the service 
    return { otp: OTP, opt_expiry: OTP_expiry_date };
};
exports.generateOTP = generateOTP;
//# sourceMappingURL=GenerateOTP.js.map