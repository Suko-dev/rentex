import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "./typeorm/entity/User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
    findByUserName(username: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
}

export { IUserRepository };
