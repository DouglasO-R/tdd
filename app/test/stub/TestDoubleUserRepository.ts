import { User } from "../../src/Entities/User";
import { IUserRepository } from "../../src/Repository/IUserRepository";


export class TestDoubleUserRepository implements IUserRepository {
    private users: User[];
    private static INSTANCE: TestDoubleUserRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): TestDoubleUserRepository {
        if (!TestDoubleUserRepository.INSTANCE) {
            TestDoubleUserRepository.INSTANCE = new TestDoubleUserRepository();
        }
        return TestDoubleUserRepository.INSTANCE;
    }

    async create(data: User): Promise<string> {
        await this.users.push(data);
        return data.id;
    }

    async findById(id:string):Promise<User>{
        const userExist =  this.users.find((user)=> user.id === id);
        if(!userExist){
            throw new Error("User not found with this id")
        }
        return userExist;
    }

}
