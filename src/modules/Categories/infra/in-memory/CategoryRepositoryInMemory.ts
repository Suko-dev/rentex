import { ICreateCategoryDTO } from "@modules/Categories/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { v4 as uuidv4 } from "uuid";

import { Category } from "../typeorm/entity/Category";

class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async findById(id: string): Promise<Category | undefined> {
        return this.categories.find((item) => item.id === id);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }

    async findByName(name: string): Promise<Category | undefined> {
        return this.categories.find((item) => item.name === name);
    }

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
