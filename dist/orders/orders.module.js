"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const orders_amount_status_controller_1 = require("./orders-amount-status.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./../users/users.module");
const customers_orders_controller_1 = require("./customers-orders.controller");
const orders_controller_1 = require("./orders.controller");
const order_schema_1 = require("./schemas/order.schema");
const orders_service_1 = require("./shared/orders.service");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Order', schema: order_schema_1.OrderSchema }
            ]),
            users_module_1.UsersModule
        ],
        controllers: [
            orders_controller_1.OrdersController,
            customers_orders_controller_1.CustomersOrdersController,
            orders_amount_status_controller_1.OrdersAmountStatusController
        ],
        providers: [
            orders_service_1.OrdersService,
        ],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map