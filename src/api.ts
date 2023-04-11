import express, { Express, Request, Response, NextFunction } from "express";
import { Log } from "./utility/ConsoleLogger";
class Api
{
   // the server instance
   public Server: Express = express();

   // all middlewares 
   public Middlewares = () =>
   {
      this.Server.use(express.json());
   };

   // all routes 
   public routes = () =>
   {
      this.Server.use((req: Request, res: Response, next: NextFunction) =>
      {
         Log("404 Error Router !!!");
         return res.status(404).json({ "error": "Not Found Page, check the url before trying again" });
      });
   };

   // server port 
   public PORT: Number = 5555;

   constructor()
   { }
}

const api: Api = new Api();
export { api };