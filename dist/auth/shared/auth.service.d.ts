import { IUserData } from './iuser-date';
import { CryptService } from './../../shared/services/crypt.service';
import { UsersService } from './../../users/shared/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private cryptService;
    private jwtService;
    constructor(usersService: UsersService, cryptService: CryptService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<IUserData>;
    login(user: IUserData): Promise<{
        access_token: string;
    }>;
}
