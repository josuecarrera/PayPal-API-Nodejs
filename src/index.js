import express from "express";
import paymentRoute from "./routes/payment.routes.js";
import { PORT } from "./config.js";

const app = express();
app.use(paymentRoute);
app.listen(PORT);

console.log("listen on ", PORT);
