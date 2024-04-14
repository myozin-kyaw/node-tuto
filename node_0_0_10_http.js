const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to our first node.js project.');
    } else if (req.url == '/about') {
        res.end('Here is about section.');
    } else {
        res.end(`
            <h1>404 Not Found</h1>
            <p>This page doesn't exist</p>
            <a href="/">Move back to home page</a>
        `);
    }
});

server.listen(2002);