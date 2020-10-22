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
exports.OrdersAmountStatusController = void 0;
const common_1 = require("@nestjs/common");
const jwt_admin_auth_guard_1 = require("./../auth/shared/admin/jwt-admin-auth.guard");
const orders_service_1 = require("./shared/orders.service");
let OrdersAmountStatusController = class OrdersAmountStatusController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async getOrdersAmountByStatus() {
        return this.ordersService.getOrdersAmountByStatus();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersAmountStatusController.prototype, "getOrdersAmountByStatus", null);
OrdersAmountStatusController = __decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Controller('orders-amount-by-status'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersAmountStatusController);
exports.OrdersAmountStatusController = OrdersAmountStatusController;
//# sourceMappingURL=orders-amount-status.controller.js.map