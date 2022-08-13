const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sooryasoman:soorya01!@cluster0.9bcz4c6.mongodb.net/library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
console.log("database is ready");


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;