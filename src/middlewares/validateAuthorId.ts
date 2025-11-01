import { NextFunction, Request, Response } from "express"
import { CustomError } from "../types/errors";

export const validateAuthorId = (req: Request, res: Response, next: NextFunction) => {
    const { authorId } = req.params;
    if (Number.isNaN(Number(authorId))) {
        throw new CustomError(400, 'Author id must be a number');
    }
    next();
}
