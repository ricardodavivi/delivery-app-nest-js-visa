/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
import { Request } from 'express';
export declare const fileFilter: (req: Request, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
