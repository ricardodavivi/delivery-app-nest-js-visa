import { IOrderAmountByStatusResponse } from './shared/iorder-amout-by-status.response';
import { OrdersService } from './shared/orders.service';
export declare class OrdersAmountStatusController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrdersAmountByStatus(): Promise<IOrderAmountByStatusResponse>;
}
