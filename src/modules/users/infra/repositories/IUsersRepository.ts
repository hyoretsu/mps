import User from "../entities/User";

export default interface IUsersRepository {
    findById(userId: string): Promise<User | undefined>;
    save(user: User): Promise<void>;
}
