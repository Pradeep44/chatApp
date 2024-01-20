const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
    },
},
{
    timestamps: true,
})

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;