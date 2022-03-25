import { User } from "../Entities/User";


export interface IUserRepository {
    create(data: User): Promise<string>;
}
