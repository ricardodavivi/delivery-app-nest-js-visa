"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSchema = void 0;
const mongoose = require("mongoose");
exports.AddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    cep: String,
    street: String,
    number: String,
    complement: String,
    neighborhood: String,
    city: String
});
//# sourceMappingURL=address.schema.js.map