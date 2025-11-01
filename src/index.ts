import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import { AuthorRouter } from './routes';
import { appErrorHandler } from './middlewares/errorHandler';

config();
const app = express();

app.use("/authors", AuthorRouter);
app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
});
app.use(appErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error: any) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}`);
})


