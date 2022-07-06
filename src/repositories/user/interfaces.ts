import { DeleteResult } from "typeorm";

interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string;
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
  findUsers: () => Promise<IUser[]>;
  findUserByCpf: (cpf: string) => Promise<IUser>;
  findByUuid: (uuid: string) => Promise<IUser>;
  deleteUser: (user: IUser) => Promise<DeleteResult>;
}

export { IUser, IUserRepo };
