import { Request } from "express";
import { UserRepository } from "../../repositories";

const updateUserService = async (req: Request) => {
  const user = await new UserRepository().findUserByCpf(req.cpf);

  const update = {
    ...req.body,
  };

  if (update.isAdm !== undefined) {
    return undefined;
  }

  for (let key in update) {
    user[key] = update[key];
  }

  user.updatedAt = new Date();
  delete user.password;

  const updateSave = await new UserRepository().saveUser(user);

  return updateSave;
};

export default updateUserService;
