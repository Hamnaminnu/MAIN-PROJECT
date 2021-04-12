const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/projectmain');
const Schema = mongoose.Schema;

var NewCanuserSchema = new Schema({
    uname : String,
    password : String,
});

var Canuserdata = mongoose.model('Canuserdata', NewCanuserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Canuserdata;