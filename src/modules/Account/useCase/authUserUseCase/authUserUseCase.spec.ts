import { UserRepositoryInMemory } from "@modules/Account/infra/in-memory/userRepositoryInMemory";

import { CreateUserUseCase } from "../createUserUsecase/createUserUseCase";
import { AuthUserUseCase } from "./authUserUseCase";

let userRepositoryInMemory: UserRepositoryInMemory;
let authUserUseCase: AuthUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Auth user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });
    it("should be able to autenticate an user", async () => {
        const password = "123";
        const email = "joe@email.com";
        await createUserUseCase.execute({
            name: "joe",
            username: "doe",
            password,
            email,
            driver_license: "1234",
        });
        const response = await authUserUseCase.execute({ email, password });
        expect(response).toHaveProperty("token");
    });
});
