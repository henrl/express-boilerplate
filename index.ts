import http from 'http';
import fs from 'fs/promises';

const host = 'localhost';
const port = 3000;

const listener = (req, res) => {
    res.writeHead(200);
    res.end("My first server");
};

const server = http.createServer(listener);
server.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}`)
});

