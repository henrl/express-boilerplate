import { Request, Response, Router } from 'express';

const authorRouter = Router();

authorRouter.get("/", (req: Request, res: Response) => {
    res.send("All authors");
});
authorRouter.get("/:authorId", (req: Request, res: Response) => {
    const { authorId } = req.params;
    res.send(`Author Id: ${authorId}`);
});

export default authorRouter;
