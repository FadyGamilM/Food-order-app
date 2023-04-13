import bcrypt, { hash } from "bcrypt";
import { vendorSignaturePayloadDto } from "../dtos/vendor/vendorSignaturePayloadDto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateSlat = async () =>
{
   let salt = await bcrypt.genSalt();
   return salt;
};

export const EncryptPassword = async (password: string, salt: string): Promise<string> =>
{
   let encryptedPass: string = await bcrypt.hash(password, salt);
   return encryptedPass;
};

export const ValidateLoginPassword = async (loginPass: string, savedPass: string, savedSalt: string): Promise<boolean> =>
{
   // hash the given pass while login
   let hashedPass: string = await EncryptPassword(loginPass, savedPass);

   // compare if they the same and return the response
   let comparisonResult: boolean = hashedPass === savedPass ? true : false;

   // return the response to the controller
   return comparisonResult;
};

// TODO => hide it later in a secret key manager
const APP_SECRET = "my_app_secret";

export const GenerateSignature = async (payload: vendorSignaturePayloadDto) =>
{
   return jwt.sign(payload, APP_SECRET, { expiresIn: "5d" });
};  