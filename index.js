require('dotenv').config();

const express = require("express");
const app = express(); // run the function

const port = 3000;

app.use(express.json());

//import
const contactsRoute = require('./routes/contacts');

//apply the routes
app.use('/contacts', contactsRoute);
//app.use('/user', userRoute);
//app.use('/comments', commentsRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});