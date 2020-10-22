import { Model } from 'mongoose';
import { Category } from './category';
export declare class CategoriesService {
    private readonly categoryModel;
    constructor(categoryModel: Model<Category>);
    getAll(): Promise<Category[]>;
    getById(id: string): Promise<Category>;
    create(category: Category): Promise<Category>;
    update(id: string, category: Category): Promise<Category>;
    delete(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
