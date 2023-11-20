// Create web server

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const comment = require('./comments');
app.use('/comment', comment);

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});