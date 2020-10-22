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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AddressService = class AddressService {
    constructor(addressModel) {
        this.addressModel = addressModel;
    }
    async getAllByUser(userId) {
        return await this.addressModel.find({ user: userId })
            .exec();
    }
    async save(userId, cep, street, number, complement, neighborhood) {
        const existsAddress = await this.addressModel.findOne({ user: userId })
            .exec();
        const address = {
            user: userId,
            cep,
            street,
            number,
            complement,
            neighborhood
        };
        if (existsAddress) {
            return await this.addressModel.updateOne({ _id: existsAddress._id }, address, { new: true });
        }
        else {
            const createdAddress = new this.addressModel(address);
            return await createdAddress.save();
        }
    }
};
AddressService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Address')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map