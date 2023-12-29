const express = require('express');

const app = express();

const port = 3000;

app.use(express.urlencoded({extended: false}))
app.use(express.static('../client'));

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
});