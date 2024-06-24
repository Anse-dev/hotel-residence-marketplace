import { CallHandler, ExecutionContext, Injectable, NestInterceptor, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(err => {
                const status = err instanceof HttpException ? err.getStatus() : 500;
                return throwError(() => new HttpException({
                    message: 'Request failed',
                    error: err.message,
                    statusCode: status
                }, status));
            })
        );
    }
}
