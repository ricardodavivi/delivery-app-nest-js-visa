/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
import { Request } from 'express';
export declare const filenameGenerator: (req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) => void;
