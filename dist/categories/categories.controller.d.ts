import { Category } from './shared/category';
import { CategoriesService } from './shared/categories.service';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
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
