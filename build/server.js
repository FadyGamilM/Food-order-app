"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const ConsoleLogger_1 = require("./utility/ConsoleLogger");
const express_1 = __importDefault(require("express"));
//* initiate the server instance
const server = (0, express_1.default)();
//* to handle request body
server.use(express_1.default.json());
//* use our custom routes
server.use("/api/admin", routes_1.AdminRouter);
server.use("/api/vendors", routes_1.VendorRoutes);
server.use("/api/shopping", routes_1.ShoppingRouter);
server.use("/api/customers", routes_1.CUstomerRouter);
//* in case of 404 not found page
server.use((req, res, next) => {
    (0, ConsoleLogger_1.Log)("404 Error Router !!!");
    return res.status(404).json({ "error": "Not Found Page, check the url before trying again" });
});
const PORT = 5555;
server.listen(PORT, () => {
    console.clear();
    (0, ConsoleLogger_1.Log)(`Server is up and running on PORT ${PORT}`);
});
//# sourceMappingURL=server.js.map