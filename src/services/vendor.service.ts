import { updateVendorProfile } from "../dtos";
import { AuthorizationPayloadDto } from "../dtos/auth/authorizationPayloadDto";
import { getVendorDto } from "../dtos/vendor/getVendorDto";
import { loginDto } from "../dtos/vendor/loginDto";
import { vendorSignaturePayloadDto } from "../dtos/vendor/vendorSignaturePayloadDto";
import { Log } from "../utility/ConsoleLogger";
import { GenerateSignature, ValidateLoginPassword } from "../utility/PasswordEncryption";
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

      // get a signature for this user for later use in other endpoints actions
      const payload: vendorSignaturePayloadDto = {
         id: existingVendor.id,
         brandName: existingVendor.brandName,
         email: existingVendor.email,
         ownerName: existingVendor.ownerName,
         foodType: existingVendor.foodType
      };

      // generaet a signature based on this payload (simply hash the data of this user)
      const signature: string = await GenerateSignature(payload);

      // return the result to the controller
      return isValidCredentials === true ? signature : null;
   }
   catch (err: any) {
      Log(err.message);
   }
   finally {
      await db.$disconnect();
   }
};

export const GetVendorById = async (vendorId: number) =>
{
   // get the vendor from db
   const existingVendor = await db.vendor.findUnique({
      where: { id: vendorId }
   });
   // return the result
   return existingVendor;
};

export const UpdateVendorProfile = async (updatedProfile: updateVendorProfile, authorizedVendorId: number) =>
{

   const oldVendor = await db.vendor.findUnique({ where: { id: authorizedVendorId } });
   if (oldVendor === null) return null;

   // update the vendor
   const updated = await db.vendor.update({
      where: {
         id: authorizedVendorId
      },
      data: {
         address: (updatedProfile.address !== undefined && updatedProfile.address !== null) ? updatedProfile.address : oldVendor.address,
         brandName: (updatedProfile.brandName !== undefined && updatedProfile.brandName !== null) ? updatedProfile.brandName : oldVendor.brandName,
         ownerName: (updatedProfile.ownerName !== undefined && updatedProfile.ownerName !== null) ? updatedProfile.ownerName : oldVendor.ownerName,
         // foodType: (updatedProfile.foodType !== undefined && updatedProfile.foodType !== null) ? oldVendor.foodType.push(updatedProfile.foodType) : oldVendor.foodType,
         phone: (updatedProfile.phone !== undefined && updatedProfile.phone !== null) ? updatedProfile.phone : oldVendor.phone,
         isServiceAvailable: (updatedProfile.isServiceAvailable !== undefined && updatedProfile.isServiceAvailable !== null) ? updatedProfile.isServiceAvailable : oldVendor.isServiceAvailable,
      }
   });

   return updated;

};



export const UpdateVendorServiceAvailability = async (authorizedVendorId: number) =>
{
   const existingVendor = await db.vendor.findUnique({ where: { id: authorizedVendorId } });
   if (!existingVendor) return null;
   return await db.vendor.update({
      where: {
         id: existingVendor.id
      },
      data: {
         isServiceAvailable: !existingVendor.isServiceAvailable
      }
   });
}















