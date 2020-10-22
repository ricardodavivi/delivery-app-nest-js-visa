import { Restaurant } from './restaurant';
import { Model } from 'mongoose';
export declare class RestaurantService {
    private readonly restaurantModel;
    constructor(restaurantModel: Model<Restaurant>);
    get(): Promise<Restaurant>;
    create(restaurant: Restaurant): Promise<Restaurant>;
    update(id: string, restaurant: any): Promise<Restaurant>;
}
