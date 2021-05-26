import { CategoryRepositoryInMemory } from "@modules/Categories/infra/in-memory/CategoryRepositoryInMemory";

import { CreateCategoryUseCase } from "../createCategory/createCategoryUseCase";
import { FindCategoryByNameUseCase } from "./FindCategoryByNameUseCase";

let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let findCategoryByNameUseCase: FindCategoryByNameUseCase;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Find category by name", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        findCategoryByNameUseCase = new FindCategoryByNameUseCase(
            categoryRepositoryInMemory
        );
        createCategoryUseCase = new CreateCategoryUseCase(
            categoryRepositoryInMemory
        );
    });
    it("should be able to list all categories", async () => {
        await createCategoryUseCase.execute({
            name: "hatch",
            description: "categoria hatch",
        });
        const category = await findCategoryByNameUseCase.execute("hatch");
        expect(category).toHaveProperty("name");
    });
});
