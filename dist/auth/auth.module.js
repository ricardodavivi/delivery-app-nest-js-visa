"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const shared_module_1 = require("./../shared/shared.module");
const users_module_1 = require("./../users/users.module");
const auth_admin_controller_1 = require("./auth-admin.controller");
const auth_customer_controller_1 = require("./auth-customer.controller");
const jwt_admin_strategy_1 = require("./shared/admin/jwt-admin.strategy");
const local_admin_strategy_1 = require("./shared/admin/local-admin.strategy");
const auth_service_1 = require("./shared/auth.service");
const constants_1 = require("./shared/constants");
const jwt_customer_strategy_1 = require("./shared/customer/jwt-customer.strategy");
const local_customer_strategy_1 = require("./shared/customer/local-customer.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '7d' },
            }),
            shared_module_1.SharedModule,
            users_module_1.UsersModule
        ],
        controllers: [
            auth_admin_controller_1.AuthAdminController,
            auth_customer_controller_1.AuthCustomerController
        ],
        providers: [
            auth_service_1.AuthService,
            local_admin_strategy_1.LocalAdminStrategy,
            local_customer_strategy_1.LocalCustomerStrategy,
            jwt_admin_strategy_1.JwtAdminStrategy,
            jwt_customer_strategy_1.JwtCustomerStrategy
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map