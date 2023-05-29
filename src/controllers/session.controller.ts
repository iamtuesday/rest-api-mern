//Create a new session

import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  // Validate the user's password
  const user = await validatePassword(req.body);
  console.log(user);

  if (!user) {
    return res.status(401).send({ msg: "Invalid username or password" });
  }

  // Create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // Create an access token
  const accessToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    "accessTokenPrivateKey",
    {
      expiresIn: config.get<string>("accessTokenTtl"),
    }
  );

  // Create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    "refreshTokenPrivateKey",
    {
      expiresIn: config.get<string>("refreshTokenTtl"),
    }
  );

  // Return access and refresh tokens
  return res.send({ accessToken, refreshToken });
};

export const getUserSessionsHandler = async (req: Request, res: Response) => {

}