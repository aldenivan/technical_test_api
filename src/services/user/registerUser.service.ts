import { Request } from "express";
import bcrypt from "bcrypt";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories";

const registerUserService = async (req: Request) => {
  const alreadyExist = await new UserRepository().findUserByCpf(req.body.cpf);

  if (alreadyExist) {
    return undefined;
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);

  const user: User = await new UserRepository().saveUser(req.body);

  const showUser = req.body;
  delete showUser.password;

  return showUser;
};

export default registerUserService;
