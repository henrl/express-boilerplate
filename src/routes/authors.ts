import { Router } from 'express';
import { getAuthorById, getAuthors } from '../controllers/authorController';
import { validateAuthorId } from '../middlewares/validateAuthorId';

const authorRouter = Router();

authorRouter.get("/", getAuthors);
authorRouter.get("/:authorId", validateAuthorId, getAuthorById);

export default authorRouter;
