import { IOrderRequest } from './shared/iorder-request';
import { OrdersService } from './shared/orders.service';
import { Order } from './shared/order';
export declare class CustomersOrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(req: any): Promise<Order[]>;
    create(order: IOrderRequest, req: any): Promise<Order>;
}
