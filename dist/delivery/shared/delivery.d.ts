import { Document } from 'mongoose';
export declare class Delivery extends Document {
    neighborhood: string;
    timeToDelivery: number;
    free: boolean;
    value: number;
}
