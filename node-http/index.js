const { log } = require('console');
const http = require('http');
const app = http.createServer((req, res) => {
    res.end("Hello Node!");
});

app.listen(3000, () => {
    log('node server is running on the port 3000');
})