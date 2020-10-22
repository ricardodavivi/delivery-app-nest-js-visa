import { Strategy } from 'passport-jwt';
import { IJwtPayload } from '../ijwt-payload';
declare const JwtCustomerStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtCustomerStrategy extends JwtCustomerStrategy_base {
    constructor();
    validate(payload: IJwtPayload): Promise<IJwtPayload>;
}
export {};
