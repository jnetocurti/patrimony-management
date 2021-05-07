import {BindingScope, ContextTags, injectable, Provider} from '@loopback/core';
import multer from 'multer';
import {FILE_UPLOAD_SERVICE} from '../keys';
import {FileUploadHandler} from '../types';

@injectable({
  scope: BindingScope.TRANSIENT,
  tags: {[ContextTags.KEY]: FILE_UPLOAD_SERVICE},
})
export class FileUploadProvider implements Provider<FileUploadHandler> {
  value(): FileUploadHandler {
    const options = {storage: multer.memoryStorage()};
    return multer(options).any();
  }
}
