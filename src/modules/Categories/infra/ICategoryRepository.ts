import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";

interface ICategoryRepository {
    create(data: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepository };
