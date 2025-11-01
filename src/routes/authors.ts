import { Request, Response, Router } from 'express';
import { getAuthorById } from '../controllers/authorController';
import { validateAuthorId } from '../middlewares/validateAuthorId';

const authorRouter = Router();

authorRouter.get("/", (req: Request, res: Response) => {
    res.send("All authors");
});
authorRouter.get("/:authorId", validateAuthorId, getAuthorById);

export default authorRouter;
