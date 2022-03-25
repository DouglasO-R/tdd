import { User } from "../../Entities/User";
import { IUserRepository } from "../../Repository/IUserRepository";



export class RetriveOneUser {
    constructor(private repository: IUserRepository) { };

    async by(id: string): Promise<User> {
        return await this.repository.findById(id);
    }
}
