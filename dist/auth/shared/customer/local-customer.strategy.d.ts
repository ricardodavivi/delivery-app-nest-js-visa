import { Strategy } from 'passport-local';
import { AuthService } from './../auth.service';
declare const LocalCustomerStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalCustomerStrategy extends LocalCustomerStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<import("../iuser-date").IUserData>;
}
export {};
