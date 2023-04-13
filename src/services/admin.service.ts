import { exit } from "process";
import { PrismaClient } from "../../prisma/client";
import { createVendorDto } from "../dtos";
import { Log } from "../utility/ConsoleLogger";
import { EncryptPassword, generateSlat } from "../utility/PasswordEncryption";
const db = new PrismaClient();

//! => create new vendor
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

//! => get all vendors
export const getVendors = async () =>
{
   try {

      let vendors = await db.vendor.findMany();
      return vendors;
   }
   catch (err: any) {
      Log(err.message);
   }
   finally {
      await db.$disconnect();
   }
};

//! => get vendor by id 
export const getVendorById = async (vendorId: number) =>
{
   try {

      let vendor = await db.vendor.findFirst({
         where: {
            id: vendorId
         }
      });
      // return vendor and if its null the controller will handle this by responding with the appropriate response
      return vendor;
   }
   catch (err: any) {
      Log(err.message);
   }
   finally {
      await db.$disconnect();
   }
};