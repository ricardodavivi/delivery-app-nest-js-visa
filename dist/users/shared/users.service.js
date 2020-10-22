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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crypt_service_1 = require("./../../shared/services/crypt.service");
const address_service_1 = require("./address.service");
const user_type_enum_1 = require("./user.type.enum");
let UsersService = class UsersService {
    constructor(userModel, addressService, cryptService) {
        this.userModel = userModel;
        this.addressService = addressService;
        this.cryptService = cryptService;
    }
    async getById(id) {
        return await this.userModel.findById(id)
            .select('name email type phone')
            .exec();
    }
    async getByEmail(email) {
        return await this.userModel.findOne({ email })
            .exec();
    }
    async createUser(user) {
        return this.create({
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            type: user_type_enum_1.UserTypeEnum.admin
        });
    }
    async createCustomer(user) {
        const createdUser = await this.create({
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            type: user_type_enum_1.UserTypeEnum.customer
        });
        if (createdUser && user.address) {
            const { cep, street, number, complement, neighborhood } = user.address;
            await this.addressService.save(createdUser._id, cep, street, number, complement, neighborhood);
        }
        return createdUser;
    }
    async create(userModel) {
        const result = await this.userModel.find({ email: userModel.email }).exec();
        if (result.length > 0) {
            throw new Error('O email informado já está sendo usado.');
        }
        let { name, email, password, phone, type } = userModel;
        password = await this.cryptService.crypt(password);
        const createdUser = new this.userModel({ name, email, password, phone, type });
        return await createdUser.save();
    }
    async update(id, user) {
        const userEntity = await this.getById(id);
        userEntity.name = user.name;
        userEntity.phone = user.phone;
        await this.userModel.updateOne({ _id: id }, userEntity).exec();
        if (user.address) {
            const { cep, street, number, complement, neighborhood } = user.address;
            await this.addressService.save(userEntity._id, cep, street, number, complement, neighborhood);
        }
        return userEntity;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        address_service_1.AddressService,
        crypt_service_1.CryptService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map