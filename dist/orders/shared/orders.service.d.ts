import { Model } from 'mongoose';
import { UsersService } from './../../users/shared/users.service';
import { IOrderAmountByStatusResponse } from './iorder-amout-by-status.response';
import { IOrderRequest } from './iorder-request';
import { Order } from './order';
import { OrderStatusEnum } from './order-status.enum';
export declare class OrdersService {
    private readonly orderModel;
    private usersService;
    constructor(orderModel: Model<Order>, usersService: UsersService);
    getById(id: string): Promise<Order>;
    private getAllOpenCloseQuery;
    getAllOpen(open: boolean): Promise<any>;
    getAllOpenByUser(userId: string, open: boolean): Promise<any>;
    getAll(): Promise<Order[]>;
    getAllByUser(userId: string): Promise<Order[]>;
    private generateNumber;
    create(order: IOrderRequest): Promise<Order>;
    updateStatus(id: string, newStatus: OrderStatusEnum): Promise<Order>;
    getOrdersAmountByStatus(): Promise<IOrderAmountByStatusResponse>;
}
