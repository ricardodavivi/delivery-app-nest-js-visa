import { Document } from 'mongoose';
export declare class BusinessHour extends Document {
    dayOfWeek: number;
    start: Date;
    end: Date;
}
