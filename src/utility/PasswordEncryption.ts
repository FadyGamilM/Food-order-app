import bcrypt, { hash } from "bcrypt";
import { vendorSignaturePayloadDto } from "../dtos/vendor/vendorSignaturePayloadDto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { Authorize } from "../middlewares";
import { AuthorizationPayloadDto } from "../dtos/auth/authorizationPayloadDto";
import { Log } from "./ConsoleLogger";

dotenv.config();

// TODO => hide it later in a secret key manager
const APP_SECRET = "my_app_secret";

export const generateSlat = async () =>
{
   let salt = await bcrypt.genSalt();
   return salt;
};

//! Encrypt given password using given salt
export const EncryptPassword = async (password: string, salt: string): Promise<string> =>
{
   let encryptedPass: string = await bcrypt.hash(password, salt);
   return encryptedPass;
};

//! validate the username and password info to authenticate the user
export const ValidateLoginPassword = async (loginPass: string, savedPass: string, savedSalt: string): Promise<boolean> =>
{
   // hash the given pass while login
   let hashedPass: string = await EncryptPassword(loginPass, savedSalt);

   // compare if they the same and return the response
   let comparisonResult: boolean = hashedPass === savedPass ? true : false;

   // return the response to the controller
   return comparisonResult;
};


//! to create the signature (hashed user info) for later authorization 
export const GenerateSignature = async (payload: AuthorizationPayloadDto) =>
{
   return jwt.sign(payload, APP_SECRET, { expiresIn: "5d" });
};

//! to validate the given signature to know who is this user 
// 1) extract signature -> 2) decrypt it to verify that this signature is encrypted by our server -> 3) attach this user payload into the request headers for other handlers
export const ValidateSignature = async (req: Request): Promise<boolean> =>
{
   //* extract the signature from the headers of the request
   const signature = req.get("authorization")?.split(" ")[1];

   if (signature) {
      //*  so we need to verify who is this user ?
      let authorizedUserPayload: AuthorizationPayloadDto = await jwt.verify(signature, APP_SECRET) as AuthorizationPayloadDto;

      //* now assign the user to the request to be accessed in the next requests handlers
      req.user = authorizedUserPayload;

      //* and return the response to the handler
      return true;
   }


   return false;
};
