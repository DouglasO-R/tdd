import {v4 as uuidV4} from "uuid";

export class User {

    id: string;
    name: string;
    username: string;
    todos?: [];

    constructor(name:string,username:string,id?:string) {
        this.id = !id ? uuidV4() : id;
        this.name = name;
        this.username = username;
        this.todos = [];
    }
}
