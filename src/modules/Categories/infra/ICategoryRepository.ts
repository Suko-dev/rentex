import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "./typeorm/entities/Category";

interface ICategoryRepository {
    create(data: ICreateCategoryDTO): Promise<void>;
    findByName(name: string): Category | undefined;
}

export { ICategoryRepository };
