import express, { Express, Request, Response } from "express";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";
const app: Express = express();
const port = process.env.PORT || 3000;
const db = drizzle(process.env.DATABASE_URL!);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
