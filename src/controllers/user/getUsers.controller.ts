import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";

const getUsersController = async (req: Request, res: Response) => {
  const userRepo: Repository<User> = getRepository(User);
  const users: User[] = await userRepo.find();

  return res.status(200).json(users);
};

export default getUsersController;
