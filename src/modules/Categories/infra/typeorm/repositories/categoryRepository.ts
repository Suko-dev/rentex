import { ICreateCategoryDTO } from "@modules/Categories/dtos/ICreateCategoryDTO";
import { getRepository, Repository } from "typeorm";

import { ICategoryRepository } from "../../ICategoryRepository";
import { Category } from "../entity/Category";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;
    constructor() {
        this.repository = getRepository(Category);
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({ name, description });
        await this.repository.save(category);
    }
    async findByName(name: string): Promise<Category | undefined> {
        const category = this.repository.findOne({ name });
        return category;
    }
    async findById(id: string): Promise<Category | undefined> {
        const category = this.repository.findOne({ id });
        return category;
    }
    async list(): Promise<Category[]> {
        const categories = this.repository.find();
        return categories;
    }
}

export { CategoryRepository };
