const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./schemas/User');

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

app.post('/signup', (req,res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
        return res.status(400).send({message: "Name/email/password required"});
    }

    const user = User.create({
        name,
        email, 
        password
    })

    return res.status(201).send({message: "User registered successfully", 
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        },
    });
})

app.post('/login', async(req,res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).send({message: "Email/password required"});

    const user = await User.findOne({ email: email });
    if(!user) return res.status(400).send({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(400).send({ message: "Incorrect password" });

    return res.status(200).send({message: "Logged in successfully", 
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        },
    });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})