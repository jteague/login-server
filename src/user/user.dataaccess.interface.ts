import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/entities/user.entity";

export interface IUserDataAccess {
    insert(user: User): boolean;
    update(user: User): boolean;
    remove(id: number): boolean;
    fetchAll(): User[];
    fetch(id: number): User;
}