import { loginDto } from "../dtos/vendor/loginDto";
import { Log } from "../utility/ConsoleLogger";
import { ValidateLoginPassword } from "../utility/PasswordEncryption";
import { db } from "./prisma.service";

export const Login = async (loginRequest: loginDto) =>
{
   try {
      // get the vendor from the db using the given email
      let existingVendor = await db.vendor.findUnique({ where: { email: loginRequest.email } });

      // check if this vendor exists 
      if (existingVendor === null) return null;

      // check if the credentials are valid
      let isValidCredentials: boolean = await ValidateLoginPassword(loginRequest.password, existingVendor.password, existingVendor.salt);

      // return the result to the controller
      return isValidCredentials === true ? existingVendor : null;
   }
   catch (err: any) {
      Log(err.message);
   }
   finally {
      await db.$disconnect();
   }
};