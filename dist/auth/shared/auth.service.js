"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const crypt_service_1 = require("./../../shared/services/crypt.service");
const users_service_1 = require("./../../users/shared/users.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, cryptService, jwtService) {
        this.usersService = usersService;
        this.cryptService = cryptService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.getByEmail(email);
        if (user && this.cryptService.compare(password, user.password)) {
            const { _id, name, email, type } = user;
            return { id: _id, name, email, type };
        }
        return null;
    }
    async login(user) {
        const payload = { sub: user.id, name: user.name, email: user.email, type: user.type };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        crypt_service_1.CryptService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map