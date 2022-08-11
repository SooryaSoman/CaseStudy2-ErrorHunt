const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sooryasoman:soorya@123@cluster0.4zvh3tt.mongodb.net/?retryWrites=true&w=majority/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;