import { RestaurantService } from './shared/restaurant.service';
import { Restaurant } from './shared/restaurant';
export declare class RestaurantController {
    private restaurantService;
    constructor(restaurantService: RestaurantService);
    get(): Promise<Restaurant>;
    create(restaurant: Restaurant): Promise<Restaurant>;
    update(id: string, restaurant: Restaurant): Promise<Restaurant>;
}
