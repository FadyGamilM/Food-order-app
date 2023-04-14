import { AuthorizationPayloadDto } from "../../dtos/auth/authorizationPayloadDto";
import { ValidateSignature } from "../../utility/PasswordEncryption";
import { Response, NextFunction, Request } from "express";

declare global
{
   namespace Express
   {
      interface Request
      {
         user?: AuthorizationPayloadDto;
      }
   }
}


//! => this middleware simply authorize the client before handling any action and executing the request and giving some response  
export const Authorize = async (req: Request, res: Response, next: NextFunction) =>
{
   const isValidSignature = await ValidateSignature(req);

   if (isValidSignature) {
      //* call the next handler
      next();
   } else {
      //* notify the client app that this user is not authorized
      return res.status(403).json({
         "error": "user is not authorized"
      });
   }

};