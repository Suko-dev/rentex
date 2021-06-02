import { AuthUserController } from "@modules/Account/useCase/authUserUseCase/authUserController";
import { CreateUserController } from "@modules/Account/useCase/createUserUsecase/createUserController";
import { Router } from "express";

const userRoutes = Router();
const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

userRoutes.post("/register", createUserController.handle);
userRoutes.post("/auth", authUserController.handle);
export { userRoutes };
