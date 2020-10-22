"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const shared_module_1 = require("./../shared/shared.module");
const customers_addresses_controller_1 = require("./customers-addresses.controller");
const customers_controller_1 = require("./customers.controller");
const address_schema_1 = require("./schema/address.schema");
const user_schema_1 = require("./schema/user.schema");
const address_service_1 = require("./shared/address.service");
const users_service_1 = require("./shared/users.service");
const users_controller_1 = require("./users.controller");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Address', schema: address_schema_1.AddressSchema }
            ]),
            shared_module_1.SharedModule
        ],
        controllers: [
            users_controller_1.UsersController,
            customers_controller_1.CustomersController,
            customers_addresses_controller_1.CustomersAddressesController
        ],
        providers: [
            users_service_1.UsersService,
            address_service_1.AddressService
        ],
        exports: [
            users_service_1.UsersService
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map