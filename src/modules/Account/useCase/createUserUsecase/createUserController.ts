import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, username, password, driver_license, email } =
            request.body;
        const createUserUserCase = container.resolve(CreateUserUseCase);
        createUserUserCase.execute({
            name,
            username,
            password,
            driver_license,
            email,
        });
        return response.status(201).send();
    }
}

export { CreateUserController };
