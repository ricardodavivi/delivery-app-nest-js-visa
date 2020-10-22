export declare class CryptService {
    crypt(value: string): Promise<string>;
    compare(value: string, encrypted: string): boolean;
}
