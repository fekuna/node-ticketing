import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to db');
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
