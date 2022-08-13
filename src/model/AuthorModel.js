const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sooryasoman:soorya01!@cluster0.9bcz4c6.mongodb.net/library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
console.log("database is ready");

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;