import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { Category } from "@modules/Categories/infra/typeorm/entity/Category";

class FindCategoryByNameUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(name: string): Promise<Category | undefined> {
        return this.categoryRepository.findByName(name);
    }
}

export { FindCategoryByNameUseCase };
