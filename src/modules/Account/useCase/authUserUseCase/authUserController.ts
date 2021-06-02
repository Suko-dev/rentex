import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthUserUseCase } from "./authUserUseCase";

class AuthUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        console.log("oi");
        try {
            const authUserUseCase = container.resolve(AuthUserUseCase);
            const { email, password } = request.body;

            const token = await authUserUseCase.execute({ email, password });

            return response.status(200).json(token);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }
}

export { AuthUserController };
