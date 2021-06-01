import { ICreateUserDTO } from "@modules/Account/dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";

import { IUserRepository } from "../../IUserRepository";
import { User } from "../entity/User";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }
    async create({
        username,
        name,
        email,
        driver_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            username,
            name,
            email,
            driver_license,
            password,
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.repository.findOne({ email });
    }

    async findById(id: string): Promise<User | undefined> {
        return this.repository.findOne({ id });
    }

    async findByUserName(username: string): Promise<User | undefined> {
        return this.repository.findOne({ username });
    }
}

export { UserRepository };
