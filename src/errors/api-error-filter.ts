import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ApiError } from '../errors/api-error';

@Catch(ApiError)
export class ApiErrorFilter implements ExceptionFilter {
    catch(exception: ApiError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const status = exception.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            statusCode: status,
            message: exception.message,
            error: exception.error,
        });
    }
}