import { Log } from "./utility/ConsoleLogger";
import { api } from "./api";


api.Server.listen(api.PORT, () =>
{
   Log(`Server is up and running on PORT ${api.PORT}`);
});

