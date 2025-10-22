import http from 'http';
import fs from 'fs/promises';

const host = 'localhost';
const port = 3000;

let indexFile;

const listener = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = http.createServer(listener);

fs.readFile(__dirname + "index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`server running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error('error');
        process.exit(1);
    })

