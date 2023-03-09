
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


const config=require('./config/config.json');

const middleware=require('./middleware/middleware')
app.use(middleware);


app.listen(port, () => console.log(`url-shortener listening on port ${config.app.port}!`));