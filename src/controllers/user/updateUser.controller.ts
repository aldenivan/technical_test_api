import { Request, Response } from "express";
import { updateUserService } from "../../services";

const updateUserController = async (req: Request, res: Response) => {
  const user = await updateUserService(req);

  if (user === undefined) {
    return res.status(401).json({ message: "Can't update isAdm field" });
  }

  if (user === "alredy user") {
    return res.status(401).json({ message: "CPF alredy exist, try other" });
  }
  return res.status(200).json(user);
};

export default updateUserController;
