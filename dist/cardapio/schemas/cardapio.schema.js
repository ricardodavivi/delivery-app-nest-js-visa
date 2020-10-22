"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardapioSchema = void 0;
const mongoose = require("mongoose");
exports.CardapioSchema = new mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Categories'
    },
    name: String,
    price: Number,
    description: String,
    photoUrl: String
}, {
    collection: 'products'
});
//# sourceMappingURL=cardapio.schema.js.map