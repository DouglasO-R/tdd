import { validate } from "uuid";
import { CreateOneUSer } from "../useCases/createUser/CreateOneUSer";
import { CreateUserDTO } from "../useCases/createUser/CreateUserDTO";
import { TestDoubleUserRepository } from "./stub/TestDoubleUserRepository";

describe("User", () => {

    // setup
    const repository = TestDoubleUserRepository.getInstance();
    const createOneUser = new CreateOneUSer(repository);

    test("should be create one user", async () => {
        // given - dado
        const requestBodyUserToBeCreated = {
            name: 'Danilo Vieira',
            username: 'danilo',
        };

        // when - quando
        const UserToBeCreatedDTO = new CreateUserDTO(requestBodyUserToBeCreated);
        const createdUserId = await createOneUser.with(UserToBeCreatedDTO);

        // then - entao
        expect(validate(createdUserId)).toBeTruthy();
    });
});