import { ICreateUserDTO } from "@modules/Account/dtos/ICreateUserDTO";
import { v4 as uuidv4 } from "uuid";

import { IUserRepository } from "../IUserRepository";
import { User } from "../typeorm/entity/User";

class UserRepositoryInMemory implements IUserRepository {
    users: User[] = [];
    async create({
        username,
        name,
        email,
        driver_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        const category = new User();
        Object.assign(category, {
            username,
            name,
            email,
            driver_license,
            password,
            id: uuidv4(),
            created_at: new Date(),
        });
        this.users.push(category);
    }
    async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find((item) => item.email === email);
    }
    async findById(id: string): Promise<User | undefined> {
        return this.users.find((item) => item.id === id);
    }
    async findByUserName(username: string): Promise<User | undefined> {
        return this.users.find((item) => item.username === username);
    }
}

export { UserRepositoryInMemory };
