import { AdminRouter } from "./routes";
import { Log } from "./utility/ConsoleLogger";
import express, { Request, Response, NextFunction, Express } from "express";

const server = express();

server.use(express.json());

// use our custom routes
server.use("/api/admin", AdminRouter);

// in case of 404 not found page
server.use((req: Request, res: Response, next: NextFunction) =>
{
   Log("404 Error Router !!!");
   return res.status(404).json({ "error": "Not Found Page, check the url before trying again" });
});


const PORT: Number = 5555;

server.listen(PORT, () =>
{
   Log(`Server is up and running on PORT ${PORT}`);
});

