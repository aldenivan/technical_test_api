import { Request } from "express";
import { UserRepository } from "../../repositories";
import { jwtConfig, PORT } from "../../configs";
import jwt, { sign } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../../entities/User";

const loginUserService = async (req: Request) => {
  const { cpf, password } = req.body;

  const user: User = await new UserRepository().findUserByCpf(cpf);

  if (!user) {
    return undefined;
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return undefined;
  }

  const loginToken = sign({ cpf, password }, jwtConfig.secretKey, {
    expiresIn: jwtConfig.expiresIn,
  });

  return loginToken;
};

export default loginUserService;
