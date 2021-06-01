import { CreateUserController } from "@modules/Account/useCase/createUserUsecase/createUserController";
import { Router } from "express";

const userRoutes = Router();
const userController = new CreateUserController();

userRoutes.post("/register", userController.handle);

export { userRoutes };
