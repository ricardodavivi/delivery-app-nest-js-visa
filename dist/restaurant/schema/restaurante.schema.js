"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantSchema = void 0;
const mongoose = require("mongoose");
exports.RestaurantSchema = new mongoose.Schema({
    name: String,
    phone: String,
    open: Boolean,
    cep: String,
    stret: String,
    number: String,
    complement: String,
    neighborhood: String,
    city: String
}, {
    collection: 'restaurant'
});
//# sourceMappingURL=restaurante.schema.js.map