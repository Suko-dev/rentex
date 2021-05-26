import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "./typeorm/entities/Category";

interface ICategoryRepository {
    create(data: ICreateCategoryDTO): Promise<void>;
    findByName(name: string): Category | undefined;
    findById(id: string): Category | undefined;
    list(): Category[];
}

export { ICategoryRepository };
