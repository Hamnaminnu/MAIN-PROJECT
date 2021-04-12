const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/projectmain');
const Schema = mongoose.Schema;

var NewRecruiterSchema = new Schema({
    name : String,
    intro : String,
    description : String,
    reasponsibilities : String,
    skills : String
});

var Recruiterdata = mongoose.model('Recruiteredata', NewRecruiterSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Recruiterdata;