export class User{

    id?:string;
	name:string; 
	username: string; 
	todos?:[];

    constructor({name,username,id}:User){
        this.id = !id ? "uuid-v4" : id;
        this.name = name;
        this.username = username;
        this.todos = [];
    }
}

type CreateUserDTO = {
    name:string;
    username:string
};
export class CreateOneUSer{

    async with({name,username}:CreateUserDTO):Promise<User>{
        const user = await new User({name,username});
        return user;
    }
}

describe("User", () => {

    test("should be create one user", async () => {
        const userToBeCreated = {
            name: 'Danilo Vieira',
            username: 'danilo',
        };

        const createOneUser = new CreateOneUSer();
        const createdUser = await createOneUser.with(userToBeCreated);

        expect(createdUser).toMatchObject(userToBeCreated);
        expect(createdUser.id).toBe("uuid-v4");
    });
});