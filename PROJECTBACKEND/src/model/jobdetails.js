const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/projectmain');
const Schema = mongoose.Schema;

var NewJobSchema = new Schema({
    name : String,
    email : String,
    comname : String,
    description : String,
});

var Jobdata = mongoose.model('Jobdata', NewJobSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Jobdata;