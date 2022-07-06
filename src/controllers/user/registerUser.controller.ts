import { Request, Response } from "express";
import { registerUserService } from "../../services";

const registerUserController = async (req: Request, res: Response) => {
  const user = await registerUserService(req);

  if (!user) {
    return res.status(400).json({ message: "CPF already registered" });
  }

  return res.status(201).json(user);
};

export default registerUserController;
