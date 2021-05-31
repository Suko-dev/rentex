import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { Category } from "@modules/Categories/infra/typeorm/entity/Category";
import { inject, injectable } from "tsyringe";

@injectable()
class FindCategoryByNameUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute(name: string): Promise<Category | undefined> {
        return this.categoryRepository.findByName(name);
    }
}

export { FindCategoryByNameUseCase };
