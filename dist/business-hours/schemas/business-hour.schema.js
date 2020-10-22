"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessHourSchema = void 0;
const mongoose = require("mongoose");
exports.BusinessHourSchema = new mongoose.Schema({
    dayOfWeek: Number,
    start: Date,
    end: Date
});
//# sourceMappingURL=business-hour.schema.js.map