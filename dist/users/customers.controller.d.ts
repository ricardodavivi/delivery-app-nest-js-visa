import { IUpdateUserRequest } from './shared/iupdate-user.request';
import { ICreateUserRequest } from './shared/icreate-user.request';
import { User } from './shared/user';
import { UsersService } from './shared/users.service';
export declare class CustomersController {
    private usersService;
    constructor(usersService: UsersService);
    getById(id: string): Promise<User>;
    create(user: ICreateUserRequest): Promise<User>;
    update(id: string, user: IUpdateUserRequest): Promise<User>;
}
