const port = 8080;

const express = require('express');

const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//application.use('/index', professionalRoutes); // url/professional
app.use('/professional', professionalRoutes); // url/professional

app.listen(port); 