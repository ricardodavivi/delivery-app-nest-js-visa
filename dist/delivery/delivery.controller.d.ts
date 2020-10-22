import { Delivery } from './shared/delivery';
import { DeliveryService } from './shared/delivery.service';
export declare class DeliveryController {
    private deliveryService;
    constructor(deliveryService: DeliveryService);
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
