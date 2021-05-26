import { CategoryRepositoryInMemory } from "../../infra/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;

describe("Criar categoria", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoryRepositoryInMemory
        );
    });
    it("should be able to create a new category", async () => {
        await createCategoryUseCase.execute({
            name: "suv",
            description: "categoria suv",
        });
        const category = await categoryRepositoryInMemory.findByName("suv");
        expect(category).toHaveProperty("id");
    });
});
