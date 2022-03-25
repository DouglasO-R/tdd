import { CreateOneUSer } from "../useCases/CreateOneUSer";
import { CreateUserDTO } from "../useCases/CreateUserDTO";

describe("User", () => {

    test("should be create one user", async () => {
        const requestBodyUserToBeCreated = {
            name: 'Danilo Vieira',
            username: 'danilo',
        };
        const UserToBeCreatedDTO = new CreateUserDTO(requestBodyUserToBeCreated);

        const createOneUser = new CreateOneUSer();
        const createdUser = await createOneUser.with(UserToBeCreatedDTO);

        expect(createdUser).toMatchObject(UserToBeCreatedDTO);
        expect(createdUser.id).toBe("uuid-v4");
    });
});