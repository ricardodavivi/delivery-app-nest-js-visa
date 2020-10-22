import { Address } from './shared/address';
import { AddressService } from './shared/address.service';
export declare class CustomersAddressesController {
    private addressService;
    constructor(addressService: AddressService);
    getAllByUser(req: any): Promise<Address[]>;
}
