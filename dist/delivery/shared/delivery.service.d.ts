import { Model } from 'mongoose';
import { Delivery } from './delivery';
export declare class DeliveryService {
    private readonly deliveryModel;
    constructor(deliveryModel: Model<Delivery>);
    getAll(): Promise<Delivery[]>;
    getById(id: string): Promise<Delivery>;
    create(delivery: Delivery): Promise<Delivery>;
    update(id: string, delivery: Delivery): Promise<Delivery>;
    delete(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
