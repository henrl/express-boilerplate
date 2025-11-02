import { Request, Response, Router } from 'express';
import { addAuthor, getAuthorById, getAuthors } from '../controllers/authorController';
import { validateAuthorId } from '../middlewares/validateAuthorId';

const authorRouter = Router();

authorRouter.get("/", getAuthors);
authorRouter.get("/:authorId", validateAuthorId, getAuthorById);
authorRouter.post("/add", addAuthor);

export default authorRouter;
