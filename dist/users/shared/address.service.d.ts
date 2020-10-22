import { Address } from './address';
import { Model } from 'mongoose';
export declare class AddressService {
    private readonly addressModel;
    constructor(addressModel: Model<Address>);
    getAllByUser(userId: string): Promise<Address[]>;
    save(userId: string, cep: string, street: string, number: string, complement: string, neighborhood: string): Promise<any>;
}
