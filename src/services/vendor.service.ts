import { exit } from "process";
import { PrismaClient } from "../../prisma/client";
import { createVendorDto } from "../dtos";
import { Log } from "../utility/ConsoleLogger";
import { EncryptPassword, generateSlat } from "../utility/PasswordEncryption";
const db = new PrismaClient();

export const createVendor = async (vendorDto: createVendorDto) =>
{
   try {
      const generatedSalt: string = await generateSlat();
      const encryptedPass: string = await EncryptPassword(vendorDto.password, generatedSalt);

      let newVendor = await db.vendor.create({
         data: {
            brandName: vendorDto.brandName,
            email: vendorDto.email,
            ownerName: vendorDto.ownerName,
            password: encryptedPass,
            salt: generatedSalt,
            phone: vendorDto.phone,
            pinCode: vendorDto.pinCode,
            isServiceAvailable: vendorDto.isServiceAvailable,
            address: vendorDto.address,
            foodType: vendorDto.foodType,
         }
      });

      return newVendor;
   }
   catch (err: any) {
      Log(err.message);
   }
   finally {
      await db.$disconnect();
   }
};