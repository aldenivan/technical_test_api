import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../../configs";

interface IDecoded {
  iat: number;
  exp: number;
  cpf: string;
}

const authenticatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  let token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, jwtConfig.secretKey, (err, decode) => {
    if (err) {
      return res.status(401).json({ message: "Missing authorization headers" });
    } else {
      req.cpf = (decode as IDecoded).cpf;

      return next();
    }
  });
};

export default authenticatedUser;
