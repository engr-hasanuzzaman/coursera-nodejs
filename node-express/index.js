const express = require('express');
const app = express();
const host = 'localhost';
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const _404Path = path.resolve(__dirname, './public/404.html');
const port = 3000;
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.get('*', (_, res) => {
    fs.createReadStream(_404Path).pipe(res);
})

app.listen(port, host, () => {
    console.log(`Server is running on: http//${host}:${port}`);
});

