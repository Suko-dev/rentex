import { ICreateCategoryDTO } from "@modules/Categories/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/Categories/infra/ICategoryRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExist = await this.categoryRepository.findByName(
            name
        );
        if (categoryAlreadyExist) {
            throw new AppError("Category already exists");
        }
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
