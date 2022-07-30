const { log } = require('console');
const http = require('http');
const fs = require('fs');
const path = require('path');

// file path
const aboutPath = path.resolve('./public', 'about.html');
const homePath = path.resolve('./public', 'home.html');
const _404Path = path.resolve('./public', '404.html');

const host = 'localhost';
const port = 3000;


const app = http.createServer((req, res) => {
    const reqPath = req.url;
    log(`request path is ${req.url}`);
    if (req.method !== 'GET') {
        res.statusCode = 401;
        fs.createReadStream(_404Path).pipe(res);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/Html');

    if (reqPath === '/about') {
        fs.createReadStream(aboutPath).pipe(res);
    } else if (reqPath === '/home') {
        fs.createReadStream(homePath).pipe(res);
    } else {
        fs.createReadStream(_404Path).pipe(res);
    }
});

app.listen(3000, () => {
    log('node server is running on the port 3000');
})