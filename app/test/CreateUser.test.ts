import { validate } from "uuid";
import { CreateOneUSer } from "../src/useCases/createUser/CreateOneUSer";
import { CreateUserDTO } from "../src/useCases/createUser/CreateUserDTO";
import { RetriveOneUser } from "../src/useCases/retrieveOneUser/RetriveOneUser";
import { TestDoubleUserRepository } from "./stub/TestDoubleUserRepository";


describe("User", () => {

    // setup
    const repository = TestDoubleUserRepository.getInstance();
    const createOneUser = new CreateOneUSer(repository);
    const retriveOneUser = new RetriveOneUser(repository);

    const requestBodyUserToBeCreated = {
        name: 'Danilo Vieira',
        username: 'danilo',
    };

    test("should be create one user and retrive this user", async () => {
        // given - dado
        const userToBeCreatedDTO = new CreateUserDTO(requestBodyUserToBeCreated);

        // when - quando
        const createdUserId = await createOneUser.with(userToBeCreatedDTO);
        const retrievedUser = await retriveOneUser.by(createdUserId);

        // then - entao
        expect(validate(createdUserId)).toBeTruthy();
        expect(retrievedUser).toMatchObject(userToBeCreatedDTO);
        expect(retrievedUser.id).toEqual(createdUserId);
    });
});