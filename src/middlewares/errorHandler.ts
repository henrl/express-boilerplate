import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../types/errors';

export const appErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(error);
    const statusCode = error instanceof CustomError ? error.code : 500;
    res.status(statusCode).json(error);
}
