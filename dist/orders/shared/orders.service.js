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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("./../../users/shared/users.service");
const order_status_enum_1 = require("./order-status.enum");
let OrdersService = class OrdersService {
    constructor(orderModel, usersService) {
        this.orderModel = orderModel;
        this.usersService = usersService;
    }
    getById(id) {
        return this.orderModel.findById(id).exec();
    }
    getAllOpenCloseQuery(open) {
        let query = this.orderModel.where('status');
        if (open) {
            query = query.ne(order_status_enum_1.OrderStatusEnum.finished);
        }
        else {
            query = query.equals(order_status_enum_1.OrderStatusEnum.finished);
        }
        return query;
    }
    async getAllOpen(open) {
        return await this.getAllOpenCloseQuery(open).exec();
    }
    async getAllOpenByUser(userId, open) {
        return await this.getAllOpenCloseQuery(open).where('customer.id', userId).exec();
    }
    async getAll() {
        return await this.orderModel.find().exec();
    }
    async getAllByUser(userId) {
        return await this.orderModel.find({ 'customer.id': userId }).exec();
    }
    generateNumber() {
        const date = new Date();
        return `#${date.getDay()}${date.getDate() + 1}${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
    }
    async create(order) {
        const user = await this.usersService.getById(order.customer.id);
        const createdOrder = new this.orderModel(Object.assign(Object.assign({}, order), { number: this.generateNumber(), date: new Date(), status: order_status_enum_1.OrderStatusEnum.created, customer: {
                id: order.customer.id,
                name: user.name,
                phone: user.phone
            } }));
        return await createdOrder.save();
    }
    async updateStatus(id, newStatus) {
        return await this.orderModel.findByIdAndUpdate(id, { status: newStatus }, { new: true });
    }
    async getOrdersAmountByStatus() {
        const today = new Date();
        let tomorrow = new Date(today.valueOf());
        tomorrow.setDate(tomorrow.getUTCDate() + 1);
        let yesterday = new Date(today.valueOf());
        yesterday.setDate(yesterday.getUTCDate() - 1);
        const openOrdersQuery = this.getAllOpenCloseQuery(true);
        const closeOrdersQuery = this.getAllOpenCloseQuery(false);
        const amountCreated = await openOrdersQuery.find({ status: order_status_enum_1.OrderStatusEnum.created }).exec();
        const amountConfirmed = await openOrdersQuery.find({ status: order_status_enum_1.OrderStatusEnum.confirmed }).exec();
        const amountAvailableToDelivery = await openOrdersQuery.find({ status: order_status_enum_1.OrderStatusEnum.availableToDelivery }).exec();
        const amountFinished = await closeOrdersQuery.where('date').gt(yesterday).lt(tomorrow).exec();
        const result = {
            amountCreated: amountCreated.length,
            amountConfirmed: amountConfirmed.length,
            amountAvailableToDelivery: amountAvailableToDelivery.length,
            amountFinished: amountFinished.length
        };
        return result;
    }
};
OrdersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Order')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map