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
exports.BusinessHoursController = void 0;
const jwt_customer_auth_guard_1 = require("./../auth/shared/customer/jwt-customer-auth.guard");
const jwt_admin_auth_guard_1 = require("./../auth/shared/admin/jwt-admin-auth.guard");
const common_1 = require("@nestjs/common");
const business_hour_1 = require("./shared/business-hour");
const business_hour_service_1 = require("./shared/business-hour.service");
let BusinessHoursController = class BusinessHoursController {
    constructor(businessHourService) {
        this.businessHourService = businessHourService;
    }
    async getAll() {
        return await this.businessHourService.getAll();
    }
    async getById(id) {
        return await this.businessHourService.getById(id);
    }
    async create(businessHour) {
        return await this.businessHourService.create(businessHour);
    }
    async update(id, businessHour) {
        return this.businessHourService.update(id, businessHour);
    }
    async delete(id) {
        return await this.businessHourService.delete(id);
    }
};
__decorate([
    common_1.UseGuards(jwt_customer_auth_guard_1.JwtCustomerAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessHoursController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessHoursController.prototype, "getById", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [business_hour_1.BusinessHour]),
    __metadata("design:returntype", Promise)
], BusinessHoursController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, business_hour_1.BusinessHour]),
    __metadata("design:returntype", Promise)
], BusinessHoursController.prototype, "update", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessHoursController.prototype, "delete", null);
BusinessHoursController = __decorate([
    common_1.Controller('businesshours'),
    __metadata("design:paramtypes", [business_hour_service_1.BusinessHourService])
], BusinessHoursController);
exports.BusinessHoursController = BusinessHoursController;
//# sourceMappingURL=business-hours.controller.js.map