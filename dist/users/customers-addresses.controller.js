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
exports.CustomersAddressesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_customer_auth_guard_1 = require("./../auth/shared/customer/jwt-customer-auth.guard");
const address_service_1 = require("./shared/address.service");
let CustomersAddressesController = class CustomersAddressesController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async getAllByUser(req) {
        console.log(req.user);
        return this.addressService.getAllByUser(req.user.sub);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomersAddressesController.prototype, "getAllByUser", null);
CustomersAddressesController = __decorate([
    common_1.UseGuards(jwt_customer_auth_guard_1.JwtCustomerAuthGuard),
    common_1.Controller('customers-addresses'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], CustomersAddressesController);
exports.CustomersAddressesController = CustomersAddressesController;
//# sourceMappingURL=customers-addresses.controller.js.map