import { User } from "../Entities/User";
import { TCreateUserDTO } from "./TCreateUserDTO";


export class CreateOneUSer {

    async with({ name, username }: TCreateUserDTO): Promise<User> {
        const user = await new User({ name, username });
        return user;
    }
}
