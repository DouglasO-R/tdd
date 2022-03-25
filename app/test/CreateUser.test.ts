import { validate } from "uuid";
import { User } from "../src/Entities/User";
import { IUserRepository } from "../src/Repository/IUserRepository";
import { CreateOneUSer } from "../src/useCases/createUser/CreateOneUSer";
import { CreateUserDTO } from "../src/useCases/createUser/CreateUserDTO";
import { TestDoubleUserRepository } from "./stub/TestDoubleUserRepository";


export class RetriveOneUser{
    constructor(private repository:IUserRepository){};

    async by(id:string):Promise<User>{
        return await this.repository.findById(id);
    }
}

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