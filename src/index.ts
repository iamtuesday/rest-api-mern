import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import logger from "./utils/logger";

import connect from "./utils/connect";
import routes from "./route";

const app = express();
const port = 3000;

// Middleware para parsear el body de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);

  // Connect to DB
  await connect();

  // Register routes
  routes(app);
});
