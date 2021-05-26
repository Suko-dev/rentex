import { CategoryRepositoryInMemory } from "@modules/Categories/infra/in-memory/CategoryRepositoryInMemory";

import { CreateCategoryUseCase } from "../createCategory/createCategoryUseCase";
import { ListCategoryUseCase } from "./listCategoryUseCase";

let listCategoryUseCase: ListCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("List category", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        listCategoryUseCase = new ListCategoryUseCase(
            categoryRepositoryInMemory
        );
        createCategoryUseCase = new CreateCategoryUseCase(
            categoryRepositoryInMemory
        );
    });
    it("should be able to list all categories", async () => {
        await createCategoryUseCase.execute({
            name: "sedan",
            description: "categoria sedan",
        });
        const categories = await listCategoryUseCase.execute();
        expect(categories[0]).toHaveProperty("name");
    });
});
