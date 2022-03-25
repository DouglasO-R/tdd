import { User } from "../../Entities/User";
import { IUserRepository } from "../../Repository/IUserRepository";
import { TCreateUserDTO } from "./TCreateUserDTO";


export class CreateOneUSer {
    private repository:IUserRepository;

    constructor(repository:IUserRepository){
        this.repository = repository;
    }

    async with({ name, username }: TCreateUserDTO): Promise<User> {
        const user = await new User({ name, username });
        const createdUser = await this.repository.create(user);
        return createdUser;
    }
}
