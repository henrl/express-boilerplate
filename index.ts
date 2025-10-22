import http from 'http';
import fs from 'fs/promises';

const host = 'localhost';
const port = 3000;

const listener = (req, res) => {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader('Content-Type', "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
};

const server = http.createServer(listener);
server.listen(port, host, () => {
    console.log(`server running on http://${host}:${port}`)
});

