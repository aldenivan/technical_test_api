import { Request, Response } from "express";
import { User } from "../../entities/User";
import { IUser, UserRepository } from "../../repositories";

const getUsersController = async (req: Request, res: Response) => {
  const users: User[] = await new UserRepository().findUsers();

  return res.status(200).json(users);
};

export default getUsersController;
