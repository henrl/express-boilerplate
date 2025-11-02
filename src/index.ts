import { Request, Response, Router } from 'express';
import { AuthorRouter } from './routes';
import { appErrorHandler } from './middlewares/errorHandler';
import { CustomError } from './types/errors';

const index = Router();

index.use("/authors", AuthorRouter);
index.use(appErrorHandler);
index.all("/{*splat}", (_req: Request, res: Response) => {
    res.status(404).json(new CustomError(404, 'Page Not Found'));
});

export default index;
