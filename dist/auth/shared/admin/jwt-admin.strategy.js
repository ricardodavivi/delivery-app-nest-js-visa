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
exports.JwtAdminStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const user_type_enum_1 = require("../../../users/shared/user.type.enum");
const constants_1 = require("../constants");
let JwtAdminStrategy = class JwtAdminStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'jwt-admin') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
    }
    async validate(payload) {
        if (payload.type != user_type_enum_1.UserTypeEnum.admin) {
            throw new common_1.UnauthorizedException();
        }
        return payload;
    }
};
JwtAdminStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], JwtAdminStrategy);
exports.JwtAdminStrategy = JwtAdminStrategy;
//# sourceMappingURL=jwt-admin.strategy.js.map