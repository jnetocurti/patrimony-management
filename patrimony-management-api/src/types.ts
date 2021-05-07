import {Request} from '@loopback/rest';
import {RequestHandler} from 'express-serve-static-core';

export type FileUploadHandler = RequestHandler;

export interface MulterRequest extends Request {
  files: Array<globalThis.Express.Multer.File>;
}
