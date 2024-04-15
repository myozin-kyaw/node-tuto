const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to our first node.js project.');
    } else if (req.url == '/about') {
        res.end(`
            <h1>About Page</h1>
            <p>This is about section</p>
            <a href="/">Move back to home page</a>
        `);
    } else {
        res.end(`
            <h1>404 Not Found</h1>
            <p>This page doesn't exist</p>
            <a href="/">Move back to home page</a>
        `);
    }
});

server.listen(2002, () => {
    console.log('Server is running in port 2002');
});