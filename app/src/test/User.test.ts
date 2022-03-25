describe("User", () => {

    test("should be create one user", async () => {
        const userToBeCreated = {
            name: 'Danilo Vieira',
            username: 'danilo',
        };

        const createOneUser = new CreateOneUSer();
        const createdUser = createOneUser.with(userToBeCreated);

        expect(createdUser).toEqual(userToBeCreated)
    });
});