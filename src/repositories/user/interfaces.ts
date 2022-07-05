import { DeleteResult } from "typeorm";
import { User } from "../../entities/User";

interface IUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  fullname: string;
  cpf: string;
  password: string;
  surname: string;
  genre: string;
  phone: string;
  address: string;
  observations: string;
  isAdm: boolean;
  profilePhoto: string;
}

interface IUserRepo {
  saveUser: (user: IUser) => Promise<IUser>;
  findUsers: () => Promise<User[]>;
  findUserByCpf: (cpf: string) => Promise<User>;
  deleteUser: (user: IUser) => Promise<DeleteResult>;
}

export { IUser, IUserRepo };
