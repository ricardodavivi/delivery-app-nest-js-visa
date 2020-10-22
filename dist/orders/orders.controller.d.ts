import { OrderStatusEnum } from './shared/order-status.enum';
import { IOrderRequest } from './shared/iorder-request';
import { OrdersService } from './shared/orders.service';
import { Order } from './shared/order';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(req: any): Promise<Order[]>;
    getById(id: any): Promise<Order>;
    create(order: IOrderRequest): Promise<Order>;
    updateStatus(id: string, body: {
        newStatus: OrderStatusEnum;
    }): Promise<Order>;
}
