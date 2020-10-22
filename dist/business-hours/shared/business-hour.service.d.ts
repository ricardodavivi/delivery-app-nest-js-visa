import { BusinessHour } from './business-hour';
import { Model } from 'mongoose';
export declare class BusinessHourService {
    private readonly businessHourModel;
    constructor(businessHourModel: Model<BusinessHour>);
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
