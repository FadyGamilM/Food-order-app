import dotenv from "dotenv";
import { Log } from "../utility/ConsoleLogger";
import twilio from "twilio";
dotenv.config();

export const RequestOTP = async (otp: number, toPhoneNumber: string) =>
{
   //* get the secrets from the twilio service 
   const twilio_sid = process.env["TWILIO_ACC_SID"];
   const twilio_auth_token = process.env["TWILIO_AUTH_TOKEN"];
   const twilio_my_phone_number = process.env["TWILIO_MY_PHONE_NUM"];

   //* instantiate twilio client 
   const client = twilio(twilio_sid, twilio_auth_token);

   //* make a request via this client 
   const twilio_response = await client.messages.create({
      body: `your OTP is ${otp}`,
      from: `${twilio_my_phone_number}`,
      to: `+20${toPhoneNumber}`
   });
};

