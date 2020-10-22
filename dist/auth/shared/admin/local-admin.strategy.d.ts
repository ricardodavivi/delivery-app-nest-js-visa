import { Strategy } from 'passport-local';
import { AuthService } from './../auth.service';
declare const LocalAdminStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalAdminStrategy extends LocalAdminStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<import("../iuser-date").IUserData>;
}
export {};
