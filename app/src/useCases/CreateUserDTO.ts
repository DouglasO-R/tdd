
export class CreateUserDTO {
    name: string;
    username: string;

    constructor({ name, username }: CreateUserDTO) {
        this.name = name;
        this.username = username;
    }
}
