import express from 'express';
import { config } from 'dotenv';
import indexRouter from './index';

config();
const app = express();

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error: any) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}`);
});
