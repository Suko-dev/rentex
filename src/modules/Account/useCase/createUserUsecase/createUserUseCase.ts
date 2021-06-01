import { ICreateUserDTO } from "@modules/Account/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/Account/infra/IUserRepository";
import { hash } from "bcrypt";
import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository") private createUserRepository: IUserRepository
    ) {}

    async execute({
        name,
        username,
        driver_license,
        password,
        email,
    }: ICreateUserDTO): Promise<void> {
        const userMail = await this.createUserRepository.findByEmail(email);
        if (userMail) {
            throw new AppError("There is already an user with this e-mail");
        }
        const userUserName = await this.createUserRepository.findByUserName(
            username
        );
        if (userUserName) {
            throw new AppError("User already exists");
        }
        const hashPassword = await hash(password, 8);
        this.createUserRepository.create({
            name,
            username,
            driver_license,
            password: hashPassword,
            email,
        });
    }
}

export { CreateUserUseCase };
