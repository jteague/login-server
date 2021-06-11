import { Provider } from "@nestjs/common";
import { UserService } from "./user.service";

export const UserServiceProvider : Provider = {
    provide: 'IUserDataAccess',
    useClass: UserService,
    //useClass: process.env.NODE_ENV === 'test' ? UserServiceMock : UserService,
};
