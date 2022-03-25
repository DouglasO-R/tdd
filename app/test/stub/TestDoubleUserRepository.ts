import { User } from "../../src/Entities/User";
import { IUserRepository } from "../../src/Repository/IUserRepository";


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

    async create(data: User): Promise<string> {
        await this.user.push(data);
        return data.id;
    }

}
