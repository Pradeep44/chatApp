const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    timestamps: true,
})

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;