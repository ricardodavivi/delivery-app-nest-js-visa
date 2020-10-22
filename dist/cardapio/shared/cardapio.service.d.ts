/// <reference types="multer" />
import { Model } from 'mongoose';
import { Cardapio } from './cardapio';
export declare class CardapioService {
    private readonly cardapioModel;
    constructor(cardapioModel: Model<Cardapio>);
    getAll(query: any): Promise<Cardapio[]>;
    getById(id: string): Promise<Cardapio>;
    private getPhotoUrl;
    create(cardapio: Cardapio, file: Express.Multer.File): Promise<Cardapio>;
    update(id: string, cardapio: Cardapio, file: Express.Multer.File): Promise<Cardapio>;
    delete(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
