"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverySchema = void 0;
const mongoose = require("mongoose");
exports.DeliverySchema = new mongoose.Schema({
    neighborhood: String,
    timeToDelivery: Number,
    free: Boolean,
    value: Number
});
//# sourceMappingURL=delivery.schema.js.map