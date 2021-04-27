const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://gabriela:${process.env.MONGODB_PASSAWORD}@cluster0.3svyn.mongodb.net/serieNode?retryWrites=true&w=majority` , { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;