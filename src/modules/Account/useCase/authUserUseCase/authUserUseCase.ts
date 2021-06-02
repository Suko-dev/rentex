import auth from "@config/auth";
import { IAuthUserDTO } from "@modules/Account/dtos/IAuthUserDTO";
import { IUserRepository } from "@modules/Account/infra/IUserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IResponse {
    token: string;
    user: {
        name: string;
        email: string;
    };
}
@injectable()
class AuthUserUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository
    ) {}
    async execute({ email, password }: IAuthUserDTO): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect");
        }

        const correctPassword = await compare(password, user.password);
        if (!correctPassword) {
            throw new AppError("Email or password incorrect");
        }

        const token = sign({}, auth.token_secret, {
            subject: user.id,
            expiresIn: auth.token_expiration,
        });
        const res: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };
        return res;
    }
}

export { AuthUserUseCase };
