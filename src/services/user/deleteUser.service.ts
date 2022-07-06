import { Request } from "express";
import { UserRepository } from "../../repositories";

const deleteUserService = async (req: Request) => {
  const user = await new UserRepository().findUserByCpf(req.cpf);

  if (!user) {
    return undefined;
  }

  const deleteUser = await new UserRepository().deleteUser(user);

  return user;
};

export default deleteUserService;
