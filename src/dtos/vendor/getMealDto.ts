export interface getMealDto
{
   id: number;
   mealName: string,
   timeToBeReady: Date;
   category: string;
   type: string;
   images?: [];
}