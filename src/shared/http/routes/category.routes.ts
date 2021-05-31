import { CreateCategoryController } from "@modules/Categories/useCase/createCategory/createCategoryController";
import { Router } from "express";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

export { categoriesRoutes };
