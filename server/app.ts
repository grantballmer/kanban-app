import express from "express";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const port = 5000;

app.use(rootRouter);

app.get("/ping", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
