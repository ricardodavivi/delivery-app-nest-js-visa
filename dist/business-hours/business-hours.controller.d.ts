import { BusinessHour } from './shared/business-hour';
import { BusinessHourService } from './shared/business-hour.service';
export declare class BusinessHoursController {
    private businessHourService;
    constructor(businessHourService: BusinessHourService);
    getAll(): Promise<BusinessHour[]>;
    getById(id: string): Promise<BusinessHour>;
    create(businessHour: BusinessHour): Promise<BusinessHour>;
    update(id: string, businessHour: BusinessHour): Promise<BusinessHour>;
    delete(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
