import { NextFunction, Request, Response } from 'express';
import * as authorService from '../services/authorService';
import { CustomError } from '../types/errors';

export const getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
    const { authorId } = req.params;
    const author = await authorService.getAuthorById(Number(authorId));
    if (!author) {
        throw new CustomError(404, `Author id ${authorId} not found`);
    }
    res.status(200).json(author);
}

export const getAuthors = async (req: Request, res: Response) => {
    const authors =  await authorService.getAuthors();
    res.status(200).json(authors);
}

export const addAuthor = async (req: Request, res: Response) => {
    const { name } = req.body;
    await authorService.addAuthor({ name });
    res.send(201);
}
