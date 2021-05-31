import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "./typeorm/entity/Category";

interface ICategoryRepository {
    create(data: ICreateCategoryDTO): Promise<void>;
    findByName(name: string): Promise<Category | undefined>;
    findById(id: string): Promise<Category | undefined>;
    list(): Promise<Category[]>;
}

export { ICategoryRepository };
