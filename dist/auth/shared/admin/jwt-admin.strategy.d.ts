import { Strategy } from 'passport-jwt';
import { IJwtPayload } from '../ijwt-payload';
declare const JwtAdminStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    constructor();
    validate(payload: IJwtPayload): Promise<IJwtPayload>;
}
export {};
