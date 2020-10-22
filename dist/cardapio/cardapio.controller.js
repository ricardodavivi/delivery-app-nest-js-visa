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
exports.CardapioController = void 0;
const jwt_admin_auth_guard_1 = require("./../auth/shared/admin/jwt-admin-auth.guard");
const jwt_customer_auth_guard_1 = require("./../auth/shared/customer/jwt-customer-auth.guard");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const cardapio_1 = require("./shared/cardapio");
const cardapio_service_1 = require("./shared/cardapio.service");
const file_filter_1 = require("./shared/file-filter");
const filename_generator_1 = require("./shared/filename-generator");
let CardapioController = class CardapioController {
    constructor(cardapioService) {
        this.cardapioService = cardapioService;
    }
    async getAll(req) {
        return await this.cardapioService.getAll(req.query);
    }
    async getById(id) {
        return await this.cardapioService.getById(id);
    }
    async create(cardapio, file) {
        return await this.cardapioService.create(cardapio, file);
    }
    async update(id, cardapio, file) {
        return this.cardapioService.update(id, cardapio, file);
    }
    async delete(id) {
        return await this.cardapioService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CardapioController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(jwt_customer_auth_guard_1.JwtCustomerAuthGuard),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardapioController.prototype, "getById", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: filename_generator_1.filenameGenerator
        }),
        fileFilter: file_filter_1.fileFilter,
    })),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cardapio_1.Cardapio, Object]),
    __metadata("design:returntype", Promise)
], CardapioController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Put(':id'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: filename_generator_1.filenameGenerator
        }),
        fileFilter: file_filter_1.fileFilter,
    })),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()), __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cardapio_1.Cardapio, Object]),
    __metadata("design:returntype", Promise)
], CardapioController.prototype, "update", null);
__decorate([
    common_1.UseGuards(jwt_admin_auth_guard_1.JwtAdminAuthGuard),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CardapioController.prototype, "delete", null);
CardapioController = __decorate([
    common_1.Controller('cardapio'),
    __metadata("design:paramtypes", [cardapio_service_1.CardapioService])
], CardapioController);
exports.CardapioController = CardapioController;
//# sourceMappingURL=cardapio.controller.js.map