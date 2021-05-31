import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { Category } from "@modules/Categories/infra/typeorm/entity/Category";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        return this.categoryRepository.list();
    }
}

export { ListCategoryUseCase };
