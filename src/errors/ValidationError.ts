import BaseError from './BaseError';

export default class ValidationError extends BaseError {
  status: number = 422;
  message: string = 'Invalid Request.';

  constructor(message?: string, errors?: any) {
    super();
    if (message) this.message = message;
    if (errors) this.errors = errors;
  }
}