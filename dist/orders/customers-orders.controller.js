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
exports.CustomersOrdersController = void 0;
const jwt_customer_auth_guard_1 = require("./../auth/shared/customer/jwt-customer-auth.guard");
const orders_service_1 = require("./shared/orders.service");
const common_1 = require("@nestjs/common");
let CustomersOrdersController = class CustomersOrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async getAll(req) {
        var _a, _b;
        if ((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.open) {
            return this.ordersService.getAllOpenByUser(req.user.sub, ((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.open) === 'true');
        }
        else {
            return this.ordersService.getAllByUser(req.user.sub);
        }
    }
    async create(order, req) {
        if (req.user.sub !== order.customer.id)
            throw new common_1.UnauthorizedException();
        return this.ordersService.create(order);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersOrdersController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersOrdersController.prototype, "create", null);
CustomersOrdersController = __decorate([
    common_1.UseGuards(jwt_customer_auth_guard_1.JwtCustomerAuthGuard),
    common_1.Controller('customers-orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], CustomersOrdersController);
exports.CustomersOrdersController = CustomersOrdersController;
//# sourceMappingURL=customers-orders.controller.js.map