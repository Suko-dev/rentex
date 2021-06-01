import { CreateUserUseCase } from "./createUserUseCase";

describe("Create user", () => {
    it("should be able to create a new user", async () => {
        await CreateUserUseCase.execute({
            name: "joe",
            username: "doe",
            password: "123",
            email: "joe@email.com",
            driver_license: "1234",
        });
        const user = await userRepositoryInMemory.findByName("joe");
        expect(user).toHaveProperty("id");
    });
});
