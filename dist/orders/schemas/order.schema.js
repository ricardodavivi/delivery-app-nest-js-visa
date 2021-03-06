"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
    number: String,
    date: Date,
    status: Number,
    total: Number,
    customer: {
        id: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        name: String,
        phone: String,
    },
    address: {
        street: String,
        number: String,
        complement: String,
        neighborhood: String,
        city: String,
    },
    deliveryPlaceType: Number,
    delivery: {
        free: Boolean,
        tax: Number,
    },
    payment: {
        paymentType: Number,
        changeFor: Number,
        cardType: Number,
    },
    items: [{
            name: String,
            description: String,
            notes: String,
            price: Number,
            quantity: Number,
            total: Number
        }]
});
//# sourceMappingURL=order.schema.js.map