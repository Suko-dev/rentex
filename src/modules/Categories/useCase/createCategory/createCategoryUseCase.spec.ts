import { CreateCategoryUseCase } from "./createCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;

describe("Criar categoria", () => {
    beforeEach(() => {
        createCategoryUseCase = new CreateCategoryUseCase();
    });
    it("should be able to create a new category", async () => {
        await createCategoryUseCase.execute();
    });
});
