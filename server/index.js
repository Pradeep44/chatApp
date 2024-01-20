const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req,res) => {
    res.status(200).send('Hello World');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})