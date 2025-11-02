import request from 'supertest';
import express from 'express';
import index from '../../src/index';

const app = express();
app.use("/", index);

// test("index route works", done => {
//     request(app)
//         .get("/")
//         .expect("Content-Type", /json/)
//         .expect({ success: true })
//         .expect(200, done);
// });

const superClient = request(app);

describe('When server is available', () => {
    describe('GET /authors', () => {
        it('should return 200 when request successful', async () => {
            await superClient
                .get("/")
                .expect("Content-Type", /json/)
                .expect({ success: true })
                .expect(200);
        })
    })
})
