import BaseError from './BaseError';

export default class DocumentFoundError extends BaseError {
  status: number = 404;
  message: string = 'Document Not Found.';
}