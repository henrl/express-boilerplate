import express, { Request, Response } from 'express';

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
});

const PORT = 3000;
app.listen(PORT, (error: any) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}`);
})


