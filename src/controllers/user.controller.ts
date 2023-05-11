import { Request, Response } from "express";
import log from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";

export const createUserHandler = async (req: Request<{}, {}, CreateUserInput["body"]>, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.json(user);

  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};
