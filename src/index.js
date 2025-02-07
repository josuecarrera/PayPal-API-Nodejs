import express from "express";
import paymentRoute from "./routes/payment.routes.js";
import { PORT } from "./config.js";
import path from "path";
import cors from "cors"
import morgan from "morgan";

const app = express();

app.use(cors())
app.use(morgan("dev"))

app.use(paymentRoute);

app.use(express.static(path.resolve('./src/public')))

app.listen(PORT);
console.log("listen on ", PORT);
