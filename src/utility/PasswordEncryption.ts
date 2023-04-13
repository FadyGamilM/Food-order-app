import bcrypt, { hash } from "bcrypt";
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