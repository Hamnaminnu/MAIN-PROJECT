const express = require('express');
var Candidatedata = require('./src/model/candidatedata');
const Recruiterdata = require('./src/model/recruiterdata');
const Canuserdata = require('./src/model/candidateuser');
const Recuserdata = require('./src/model/recruiteruser');
const Jobdatas = require('./src/model/jobdetails');
const cors = require('cors');
var bodyparser= require('body-parser');
var app = new express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
// CANDIDATE 
app.get('/profile/:id',function(req,res){
    const id = req.params.id;
    Candidatedata.findOne({email:id})
    .then(function(Candidatedata){
        res.status(200).send(Candidatedata);
    });
    // Candidatedata.find()
    //             .then(function(Candidatedata){
    //                 res.send(Candidatedata);
    //             });
});
app.get('/profile',function(req,res){
    Candidatedata.find()
                .then(function(Candidatedata){
                    res.send(Candidatedata);
                });
});

app.post('/profilecheck',function(req,res){
   
    console.log(req.body);
    const uemail = req.body.profilecheck.email;
    console.log(uemail);
    Candidatedata.findOne({email:uemail}).then(function(Candidatedata){
                    res.send(Candidatedata);
                });

    
});
app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var Candidate = {       
    firstname : req.body.Candidatedata.firstname,
    lastname : req.body.Candidatedata.lastname,
    gender : req.body.Candidatedata.gender,
    birthday : req.body.Candidatedata.birthday,
    phonenumber : req.body.Candidatedata.phonenumber,
    email : req.body.Candidatedata.email,
    address : req.body.Candidatedata.address,
    state : req.body.Candidatedata.state,
    institute1 : req.body.Candidatedata.institute1,
    course1 : req.body.Candidatedata.course1,
    stream1 : req.body.Candidatedata.stream1,
    score1 : req.body.Candidatedata.score1,
    passout1 : req.body.Candidatedata.passout1,
    institute2 : req.body.Candidatedata.institute2,
    course2 : req.body.Candidatedata.course2,
    stream2 : req.body.Candidatedata.stream2,
    score2 : req.body.Candidatedata.score2,
    passout2 : req.body.Candidatedata.passout2,
    institute3 : req.body.Candidatedata.institute3,
    score3 : req.body.Candidatedata.score3,
    passout3 : req.body.Candidatedata.passout3,
    institute4 : req.body.Candidatedata.institute4,
    stream4 : req.body.Candidatedata.stream4,
    score4 : req.body.Candidatedata.score4,
    passout4 : req.body.Candidatedata.passout4,
    training : req.body.Candidatedata.training,
    organization : req.body.Candidatedata.organization,
    duration : req.body.Candidatedata.duration,
    description : req.body.Candidatedata.description,
    skills : req.body.Candidatedata.skills,
    resume : req.body.Candidatedata.resume,
    coverletter : req.body.Candidatedata.coverletter,
    photo : req.body.Candidatedata.photo,
    link : req.body.Candidatedata.link
   }       
   var Candidate = new Candidatedata(Candidate);
   Candidate.save();
});


// RECRUITER
app.get('/recruiterprofile/:id',function(req,res){
    const id = req.params.id;
    Recruiterdata.findOne({name:id})
    .then(function(Recruiterdata){
        res.status(200).send(Recruiterdata);
    });
});
app.get('/recruiterprofile',function(req,res){
    
    Recruiterdata.find()
                .then(function(Recruiterdata){
                    res.send(Recruiterdata);
                });
});
app.post('/insertrecruiter',function(req,res){
   
    console.log(req.body);
   
    var Recruiter = {       
        name : req.body.Recruiterdata.name,
        intro : req.body.Recruiterdata.intro,
        description : req.body.Recruiterdata.description,
        reasponsibilities :req.body.Recruiterdata.reasponsibilities,
        skills : req.body.Recruiterdata.skills
   }       
   var Recruiter = new Recruiterdata(Recruiter);
   Recruiter.save();
});
// LOGIN AND SIGN IN
app.post('/userdata',function(req,res){
   
    console.log(req.body);
   
    var userdata = {       
        uname : req.body.Candidateuser.uname,
        password : req.body.Candidateuser.password
   }       
   var user = new Canuserdata(userdata);
   user.save();
});
app.post('/usercheck',function(req,res){
   
    console.log(req.body);
    const name = req.body.usercheck.uname;
    const upsw = req.body.usercheck.password;
    Canuserdata.findOne({uname:name,password:upsw}, function(err, result) {
        if (result){
        let message="success" 
        res.status(200).send({message});
        }
        else {
            let message="fail" 
        res.status(200).send({message});
        }
      });
    
});

app.post('/recusercheck',function(req,res){
   
    console.log(req.body);
    const name = req.body.usercheck.uname;
    const upsw = req.body.usercheck.password;
    Recuserdata.findOne({uname:name,password:upsw}, function(err, result) {
        if (result){
        let message="success" 
        res.status(200).send({message});
        }
        else {
            let message="fail" 
        res.status(200).send({message});
        }
      });
    
});
app.post('/recuserdata',function(req,res){
   
    console.log(req.body);
   
    var userdata = {       
        uname : req.body.Recruiteruser.uname,
        password : req.body.Recruiteruser.password
   }       
   var user = new Recuserdata(userdata);
   user.save();
});
//JOB APPLICATION
app.post('/jobdata',function(req,res){
   
    console.log(req.body.jobdat);
   
    var jobdata = {       
        name : req.body.jobdat.uname,
        email: req.body.jobdat.email,
        comname : req.body.jobdat.rname,
        description  : req.body.jobdat.description 
   }       
   var job = new Jobdatas(jobdata);
   job.save();
   const uemail = req.body.jobdat.email;
    console.log(uemail);
    Jobdatas.findOne({email:uemail}).then(function(Jobdatas){
                    res.send(Jobdatas);
                });

});
app.get('/jobdata/:id',function(req,res){
    const id = req.params.id;
    Jobdatas.findOne({email:id})
    .then(function(Jobdatas){
        res.status(200).send(Jobdatas);
    });
    
});
app.get('/recjobdata/',function(req,res){
    Jobdatas.find()
    .then(function(Jobdatas){
        res.send(Jobdatas);
    });
    
});




app.listen(3000, function(){
    console.log('listening to port 3000');
});