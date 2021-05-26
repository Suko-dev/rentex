import { ICreateCategoryDTO } from "@modules/Categories/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { v4 as uuidv4 } from "uuid";

import { Category } from "../typeorm/entities/Category";

class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];
    async create(data: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            description: data.description,
            name: data.name,
            id: uuidv4(),
        });
        this.categories.push(category);
    }
}

export { CategoryRepositoryInMemory };
