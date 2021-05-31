import { CreateCategoryController } from "@modules/Categories/useCase/createCategory/createCategoryController";
import { FindCategoryByNameController } from "@modules/Categories/useCase/FindCategoryByName/findCategoryByNameController";
import { ListCategoryController } from "@modules/Categories/useCase/listCategory/listCategoryController";
import { Router } from "express";

const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const findCategoryByNameController = new FindCategoryByNameController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/:category", findCategoryByNameController.handle);
categoriesRoutes.get("/", listCategoryController.handle);

export { categoriesRoutes };
