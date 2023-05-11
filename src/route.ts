import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";
import { createUserSessionHandler } from "./controllers/session.controller";
import { createSessionSchema } from "./schema/session.schema";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post(
    "/api/v1/users",
    validateResource(createUserSchema),
    createUserHandler
  );

  app.post(
    "/api/v1/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );
};

export default routes;
