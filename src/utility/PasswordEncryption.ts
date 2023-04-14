import bcrypt, { hash } from "bcrypt";
import { vendorSignaturePayloadDto } from "../dtos/vendor/vendorSignaturePayloadDto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction } from "express";
import { AuthorizationPayloadDto } from "../dtos/auth/authorizationPayloadDto";
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

//* to create the signature (hashed user info) for later authorization 
export const GenerateSignature = async (payload: vendorSignaturePayloadDto) =>
{
   return jwt.sign(payload, APP_SECRET, { expiresIn: "5d" });
};

//* to validate the given signature to know who is this user 
export const ValidateSignature = async (req: Request, res: Response, next: NextFunction): Promise<boolean> =>
{
   //* extract the signature from the headers of the request
   const signature = req.headers.get("authorization")?.split(" ")[1];

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