const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/projectmain');
const Schema = mongoose.Schema;

var NewCandidateSchema = new Schema({
    firstname : String,
    lastname : String,
    gender : String,
    birthday : Date,
    phonenumber : Number,
    email : String,
    address : String, 
    state : String,
    institute1 : String,
    course1 : String,
    stream1 : String,
    score1 : String,
    passout1 : String,
    institute2 : String,
    course2 : String,
    stream2 : String,
    score2 : String,
    passout2 : String,
    institute3 : String,
    score3 : String,
    passout3 : String,
    institute4 : String,
    stream4 : String,
    score4 : String,
    passout4 : String,
    training : String,
    organization : String,
    duration : String,
    description : String,
    skills : String,
    resume : String,
    coverletter : String,
    photo : String,
    link : String
});

var Candidatedata = mongoose.model('Candidatedata', NewCandidateSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Candidatedata;