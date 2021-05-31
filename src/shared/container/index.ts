import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { CategoryRepository } from "@modules/Categories/infra/typeorm/repositories/categoryRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);
