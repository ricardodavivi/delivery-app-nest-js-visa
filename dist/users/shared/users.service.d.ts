import { Model } from 'mongoose';
import { CryptService } from './../../shared/services/crypt.service';
import { AddressService } from './address.service';
import { ICreateUserRequest } from './icreate-user.request';
import { IUpdateUserRequest } from './iupdate-user.request';
import { User } from './user';
export declare class UsersService {
    private readonly userModel;
    private readonly addressService;
    private cryptService;
    constructor(userModel: Model<User>, addressService: AddressService, cryptService: CryptService);
    getById(id: string): Promise<User>;
    getByEmail(email: string): Promise<User>;
    createUser(user: ICreateUserRequest): Promise<User>;
    createCustomer(user: ICreateUserRequest): Promise<User>;
    private create;
    update(id: string, user: IUpdateUserRequest): Promise<User>;
}
