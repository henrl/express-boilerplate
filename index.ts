import http from 'http';
import fs from 'fs/promises';

const host = 'localhost';
const port = 3000;

const listener = (req, res) => {
    let filename = __dirname + "/404.html";
    switch (req.url) {
        case "/":
            filename = __dirname + "/index.html";
            break;
        case "/about":
            filename = __dirname + "/about.html";
            break;
        case "/contact-me":
            filename = __dirname + "/contact-me.html";
            break;
        default:
            filename = __dirname + "/404.html";
    }
    fs.readFile(filename)
        .then((contents) => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
};

const server = http.createServer(listener);

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
})

