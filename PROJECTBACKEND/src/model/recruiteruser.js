const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');\
mongoose.connect('mongodb://localhost:27017/projectmain');
const Schema = mongoose.Schema;

var NewRecuserSchema = new Schema({
    uname : String,
    password : String,
});

var Recuserdata = mongoose.model('Recuserdata', NewRecuserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Recuserdata;