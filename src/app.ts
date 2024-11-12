import express, { Express, Request, Response } from "express";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";
import calculationRoutes from "./routes/calculationRoutes";
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger-output.json");

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const db = drizzle(process.env.DATABASE_URL!);

app.get("/", async (req: Request, res: Response) => {
  res.send("Glitchhub Server");
});

app.use("/calculations", calculationRoutes);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
