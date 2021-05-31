import { CreateCategoryController } from "@modules/Categories/useCase/createCategory/createCategoryController";
import { FindCategoryByNameController } from "@modules/Categories/useCase/FindCategoryByName/findCategoryByNameController";
import { Router } from "express";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const findCategoryByNameController = new FindCategoryByNameController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/:category", findCategoryByNameController.handle);

export { categoriesRoutes };
