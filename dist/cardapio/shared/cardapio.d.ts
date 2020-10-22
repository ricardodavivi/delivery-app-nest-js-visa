import { Document } from 'mongoose';
export declare class Cardapio extends Document {
    category: string;
    name: string;
    price: number;
    description: string;
    photoUrl: string;
}
