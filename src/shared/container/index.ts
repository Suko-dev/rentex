import { IUserRepository } from "@modules/Account/infra/IUserRepository";
import { UserRepository } from "@modules/Account/infra/typeorm/repositories/UserRepository";
import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { CategoryRepository } from "@modules/Categories/infra/typeorm/repositories/categoryRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
