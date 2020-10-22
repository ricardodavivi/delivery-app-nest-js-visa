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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const jwt_admin_auth_guard_1 = require("./../auth/shared/admin/jwt-admin-auth.guard");
const jwt_customer_auth_guard_1 = require("./../auth/shared/customer/jwt-customer-auth.guard");
const restaurant_service_1 = require("./shared/restaurant.service");
const common_1 = require("@nestjs/common");
const restaurant_1 = require("./shared/restaurant");
let RestaurantController = class RestaurantController {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async get() {
        return await this.restaurantService.get();
    }
    async create(restaurant) {
        return await this.restaurantService.create(restaurant);
    }
    async update(id, restaurant) {
        return this.restaurantService.update(id, restaurant);
    }
};
__decorate([
    common_1.UseGuards(jwt_customer_auth_guard_1.JwtCustomerAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "get", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_1.Restaurant]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, restaurant_1.Restaurant]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "update", null);
RestaurantController = __decorate([
    common_1.Controller('restaurant'),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantController);
exports.RestaurantController = RestaurantController;
//# sourceMappingURL=restaurant.controller.js.map