const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/AI_MODELS';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));


// Define your Conversation schema (modify as needed)
const conversationSchema = new mongoose.Schema({
  userMessage: String,
  assistantMessage: String,
  timestamp: Date,
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = { Conversation };