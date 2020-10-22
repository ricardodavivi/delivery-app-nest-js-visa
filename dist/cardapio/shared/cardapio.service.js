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
exports.CardapioService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const fs_1 = require("fs");
const mongoose_2 = require("mongoose");
const path_1 = require("path");
let CardapioService = class CardapioService {
    constructor(cardapioModel) {
        this.cardapioModel = cardapioModel;
    }
    async getAll(query) {
        const hasFilterByName = query.name ? true : false;
        const filter = {};
        if (hasFilterByName) {
            filter['name'] = { $regex: '.*' + query.name + '.*', $options: 'i' };
        }
        return await this.cardapioModel.find(filter).populate('category').exec();
    }
    async getById(id) {
        return await this.cardapioModel.findById(id).exec();
    }
    getPhotoUrl(filename) {
        return `${process.env.APPLICATION_URL}/${filename}`;
    }
    async create(cardapio, file) {
        if (file) {
            cardapio.photoUrl = this.getPhotoUrl(file.filename);
        }
        const createdProduct = new this.cardapioModel(cardapio);
        const newProduct = await createdProduct.save();
        return newProduct;
    }
    async update(id, cardapio, file) {
        if (file) {
            const product = await this.getById(id);
            if (product.photoUrl) {
                const imageName = product.photoUrl.substring(product.photoUrl.lastIndexOf('/') + 1);
                const imagePath = path_1.join(__dirname, '..', '..', '..', 'uploads', imageName);
                fs_1.unlinkSync(imagePath);
            }
            cardapio.photoUrl = this.getPhotoUrl(file.filename);
        }
        return await this.cardapioModel.findByIdAndUpdate(id, cardapio, { new: true });
    }
    async delete(id) {
        return await this.cardapioModel.deleteOne({ _id: id }).exec();
    }
};
CardapioService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Cardapio')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CardapioService);
exports.CardapioService = CardapioService;
//# sourceMappingURL=cardapio.service.js.map