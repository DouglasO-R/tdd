import { User } from "../../Entities/User";
import { IUserRepository } from "../../Repository/IUserRepository";


export class TestDoubleUserRepository implements IUserRepository {
    private user: User[];
    private static INSTANCE: TestDoubleUserRepository;

    private constructor() {
        this.user = [];
    }

    public static getInstance(): TestDoubleUserRepository {
        if (!TestDoubleUserRepository.INSTANCE) {
            TestDoubleUserRepository.INSTANCE = new TestDoubleUserRepository();
        }
        return TestDoubleUserRepository.INSTANCE;
    }

    async create(data: User): Promise<User> {
        await this.user.push(data);
        return data;
    }

}
