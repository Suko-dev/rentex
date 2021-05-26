import { ICreateCategoryDTO } from "@modules/Categories/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";

import { AppError } from "../../../../shared/errors/AppError";

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExist = this.categoryRepository.findByName(name);
        if (categoryAlreadyExist) {
            throw new AppError("Category already exists");
        }
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
