import { Meal, Vendor } from "../../prisma/client";
import { db } from "./prisma.service";

export const GetAllVendors = async () =>
{
   const vendors = await db.vendor.findMany({
      include: {
         meals: true,
         _count: true
      }
   });
   return vendors;
};

export const GetTopRatingVendors = async (numOfVendors: number = 10) =>
{
   let vendors = await db.vendor.findMany({
      take: numOfVendors,
      skip: 0,
      orderBy: {
         rating: "desc"
      },
      where: {
         rating: {
            gte: 4
         }
      },
      include: {
         _count: true,
         meals: true
      }
   });

   return vendors;
};

export const GetVendorMealsUnderSpecificTime = async (duration: number) =>
{
   //* get all vendors and populate the meals with each vendor
   let vendors = await db.vendor.findMany({
      where: {
         isServiceAvailable: true // for sure users look for meals in less than 30 mins, so we have to return only the available service only 
      },
      include: {
         _count: true,
         meals: true
      }
   });

   //* filter the meals based on the duration for being ready
   let meals: Array<Meal> = [];
   vendors.forEach(vendor =>
   {
      meals.push(...vendor.meals.filter(meal => meal.timeToBeReady <= duration));
   });

   //* return the response
   return meals;
};

export const GetAvailableVendors = async () =>
{
   //* get all available vendors 
   let vendors: Array<Vendor> = await db.vendor.findMany({ where: { isServiceAvailable: true } });

   //* return the response 
};