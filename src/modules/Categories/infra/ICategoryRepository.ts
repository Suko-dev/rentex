import { ICategoryDTO } from "../dtos/ICategoryDTO";

interface ICategoryRepository {
    create(data: ICategoryDTO): Promise<void>;
}

export { ICategoryRepository };
