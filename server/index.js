const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config() 

mongoose.connect(
    process.env.MONGO_BASE_URL,
    {useNewUrlParser: true})
    .then(() => {
        console.log("connected to db");
    })
    .catch((error) => {
        console.log('error in connecting', error);
    })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req,res) => {
    res.status(200).send('Hello World');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})