/// <reference types="multer" />
import { Cardapio } from './shared/cardapio';
import { CardapioService } from './shared/cardapio.service';
import { Request } from 'express';
export declare class CardapioController {
    private cardapioService;
    constructor(cardapioService: CardapioService);
    getAll(req: Request): Promise<Cardapio[]>;
    getById(id: string): Promise<Cardapio>;
    create(cardapio: Cardapio, file: Express.Multer.File): Promise<Cardapio>;
    update(id: string, cardapio: Cardapio, file: Express.Multer.File): Promise<Cardapio>;
    delete(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
