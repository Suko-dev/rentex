import { CategoryRepositoryInMemory } from "@modules/Categories/infra/in-memory/CategoryRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

import { CreateCategoryUseCase } from "./createCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;

describe("Create category", () => {
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
    it("shouldn't be able to create a new category with a name that already exist", async () => {
        expect(async () => {
            await createCategoryUseCase.execute({
                name: "suv",
                description: "categoria suv",
            });
            await createCategoryUseCase.execute({
                name: "suv",
                description: "categoria suv",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
