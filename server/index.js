const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./schemas/User');
const Conversation = require('./schemas/Conversation');
const Message = require('./schemas/Message');
const {
    encryptMessage,
    decryptMessage,
} = require('./service/encryption');

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

app.get("/users", async(req,res) => {
    const usersArr = await User.find({ _id: { "$ne": req.query.userId } });
    const users = usersArr.map(user => {
        return {
            userId: user.id,
            name: user.name,
            email: user.email,
        }
    })

    return res.status(200).send({ users });
})

app.get("/conversation", async(req,res) => {
    const user1Id = req.query.user1;
    const user2Id = req.query.user2;
    let conversation = await Conversation.findOne({ users:{
        $all:[user1Id, user2Id]}});
    if(!conversation) {
        conversation = await Conversation.create({
            users:[user1Id, user2Id],
        });

    }

    return res.status(200).send({ conversation });
})

app.post('/messages/create', async(req,res) => {
    const { userId, conversationId, message } = req.body;

    await Message.create({
        author: userId,
        conversation: conversationId,
        text: message,
    })

    return res.status(201).send({ message: "Message sent" });
})

app.get("/messages", async(req,res) => {
    const conversationId = req.query.conversation;
    let messages = await Message.find({ conversation: conversationId });

    return res.status(200).send({ messages });
})

app.post('/encryptMessage', async(req,res) => {
    const message = req.body.message;
    const encryptedMessage = encryptMessage(message);
    return res.status(200).send({ encryptedMessage })
})

app.post('/decryptMessage', async(req,res) => {
    const message = req.body.message;
    const decryptedMessage = decryptMessage(message);
    return res.status(200).send({ decryptedMessage })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})