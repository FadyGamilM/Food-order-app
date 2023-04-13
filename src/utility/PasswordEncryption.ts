import bcrypt from "bcrypt";
export const generateSlat = async () =>
{
   let salt = await bcrypt.genSalt();
   return salt;
};

export const EncryptPassword = async (password: string, salt: string) =>
{
   let encryptedPass: string = await bcrypt.hash(password, salt);
   return encryptedPass;
};