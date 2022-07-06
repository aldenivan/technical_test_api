import { Request, Response } from "express";
import { deleteUserService } from "../../services";

const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req);

  if (user === undefined) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserController;
