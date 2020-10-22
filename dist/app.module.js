"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const orders_module_1 = require("./orders/orders.module");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const business_hours_module_1 = require("./business-hours/business-hours.module");
const cardapio_module_1 = require("./cardapio/cardapio.module");
const category_module_1 = require("./categories/category.module");
const delivery_module_1 = require("./delivery/delivery.module");
const restaurant_module_1 = require("./restaurant/restaurant.module");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'uploads'),
            }),
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, { useFindAndModify: false }),
            category_module_1.CategoryModule,
            delivery_module_1.DeliveryModule,
            business_hours_module_1.BusinessHoursModule,
            cardapio_module_1.CardapioModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            restaurant_module_1.RestaurantModule,
            orders_module_1.OrdersModule,
        ],
        controllers: [
            app_controller_1.AppController
        ],
        providers: [
            app_service_1.AppService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map