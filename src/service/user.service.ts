import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../models/user.model";
import { FilterQuery } from "mongoose";

export const createUser = async (input: UserInput) => {
  try {
    const user = await UserModel.create(input);
    console.log(omit(user.toJSON(), "password"));
    return omit(user.toJSON(), "password");
  } catch (error: any) {
    throw new Error(error);
  }
};

//Validate password
export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //Find user with email
  const user = await UserModel.findOne({ email });

  //Check that user exists
  if (!user) {
    return false;
  }

  //Check that password is correct
  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
};

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}
