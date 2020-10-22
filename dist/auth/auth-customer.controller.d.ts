import { AuthService } from './shared/auth.service';
export declare class AuthCustomerController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
}
