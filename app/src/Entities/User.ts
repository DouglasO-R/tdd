
export class User {

    id?: string;
    name: string;
    username: string;
    todos?: [];

    constructor({ name, username, id }: User) {
        this.id = !id ? "uuid-v4" : id;
        this.name = name;
        this.username = username;
        this.todos = [];
    }
}
