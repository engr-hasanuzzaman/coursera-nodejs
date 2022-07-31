/*---------------
* import
* ---------------*/ 
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotionRouter');
const leaderRouter = require('./routes/leaderRouter');

/*---------------
* constant
* ---------------*/ 
const app = express();
const host = 'localhost';
const _404Path = path.resolve(__dirname, './public/404.html');
const port = 3000;

/*---------------
* middlewares
* ---------------*/
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

/*---------------
* routes
* ---------------*/
app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);

/*---------------
* others
* ---------------*/
app.get('*', (_, res) => {
    fs.createReadStream(_404Path).pipe(res);
})

app.listen(port, host, () => {
    console.log(`Server is running on: http//${host}:${port}`);
});

