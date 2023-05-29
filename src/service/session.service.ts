import { FilterQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model";

export const createSession = async (userId: string, userAgent: string) => {
  const session = await SessionModel.create({ user: userId, userAgent });
  return session.toJSON();

  // .toJSON() is used to convert the result to a plain JavaScript object instead of a Mongoose object.
};

export const findSessions = async (query: FilterQuery<SessionDocument>) => {
  return SessionModel.find(query).lean();

  //.lean() is used to convert the result to a plain JavaScript object instead of a Mongoose object.
};
