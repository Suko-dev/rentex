import { ICreateCategoryDTO } from "@modules/Categories/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
