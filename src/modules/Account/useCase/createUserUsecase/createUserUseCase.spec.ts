import { UserRepositoryInMemory } from "@modules/Account/infra/in-memory/userRepositoryInMemory";

import { CreateUserUseCase } from "./createUserUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Create user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });
    it("should be able to create a new user", async () => {
        await createUserUseCase.execute({
            name: "joe",
            username: "doe",
            password: "123",
            email: "joe@email.com",
            driver_license: "1234",
        });
        const user = await userRepositoryInMemory.findByEmail("joe@email.com");
        expect(user).toHaveProperty("id");
    });
});
