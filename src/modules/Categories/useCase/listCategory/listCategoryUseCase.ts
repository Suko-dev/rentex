import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { Category } from "@modules/Categories/infra/typeorm/entities/Category";

class ListCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(): Promise<Category[]> {
        return this.categoryRepository.list();
    }
}

export { ListCategoryUseCase };
