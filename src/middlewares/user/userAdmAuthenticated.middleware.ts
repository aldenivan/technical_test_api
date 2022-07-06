import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories";

const userAdmAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userAdm: User = await new UserRepository().findUserByCpf(req.cpf);

  const { cpf } = req?.params;

  if (!userAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (cpf) {
    const user: User = await new UserRepository().findUserByCpf(cpf);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    } else if (userAdm.cpf !== user.cpf && userAdm.isAdm === false) {
      return res.status(401).json({ message: "Missing admin permissions" });
    }

    req.user = user;
  } else if (!userAdm.isAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return next();
};

export default userAdmAuthenticated;
