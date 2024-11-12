import express, { Express, NextFunction, Request, Response } from "express";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";
import calculationRoutes from "./routes/calculationRoutes";
import orderRoutes from "./routes/orderRoutes";
export const db = drizzle(process.env.DATABASE_URL!);

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger-output.json");

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  res.send("Glitchhub Server");
});

app.use("/calculations", calculationRoutes);
app.use("/orders", orderRoutes);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong!",
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
