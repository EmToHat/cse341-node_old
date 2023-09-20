const express = require('express');

const app = express();

app.use('/', require('./routes'))

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))