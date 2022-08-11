const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sooryasoman:soorya@123@cluster0.4zvh3tt.mongodb.net/?retryWrites=true&w=majority/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;