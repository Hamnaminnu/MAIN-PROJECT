import { Component, OnInit } from '@angular/core';
// import { ProfileModel } from './profile.model';
import { Router } from '@angular/router';
import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Candidatedata = {
    firstname : '',
    lastname : '',
    gender : '',
    birthday : '',
    phonenumber : '',
    email : '',
    address : '',
    state : '',
    institute1 :'',
    course1 : '',
    stream1 : '',
    score1 : '',
    passout1 : '',
    institute2 : '',
    course2 : '',
    stream2 : '',
    score2 : '',
    passout2 : '',
    institute3 : '',
    score3 : '',
    passout3 : '',
    institute4 : '',
    stream4 : '',
    score4 : '',
    passout4 : '',
    training : '',
    organization : '',
    duration : '',
    description : '',
    skills : '',
    resume : '',
    coverletter : '',
    photo : '',
    link : ''
  }
  profiles={
    email:' '
  }
  // Candidatedata: ProfileModel["",""];

  constructor(private ProfileService: ProfileService,private router : Router) { }

  ngOnInit(): void {
    
  }
  profile(){
    // let id = profiles.email ;
    
    this.ProfileService.getCandidatedata(this.profiles.email).subscribe(
     
      res =>  {
       this.Candidatedata.email = res.email;
       this.Candidatedata.firstname = res.firstname;
       this.Candidatedata.lastname = res.lastname;
       this.Candidatedata.gender = res.gender;
       this.Candidatedata.birthday = res.birthday;
       this.Candidatedata.phonenumber = res.phonenumber;
       this.Candidatedata.address = res.address;
       this.Candidatedata.state = res.state;
       this.Candidatedata.institute1 = res.institute1;
       this.Candidatedata.course1 = res.course1;
       this.Candidatedata.stream1 = res.stream1;
       this.Candidatedata.score1 = res.score1;
       this.Candidatedata.passout1 = res.passout1;
       this.Candidatedata.institute2 = res.institute2;
       this.Candidatedata.course2 = res.course2;
       this.Candidatedata.stream2 = res.stream2;
       this.Candidatedata.score2 = res.score2;
       this.Candidatedata.passout2 = res.passout2;
       this.Candidatedata.institute3 = res.institute3;
       this.Candidatedata.passout3 = res.passout3;
       this.Candidatedata.score3 = res.score3;
       this.Candidatedata.institute4 = res.institute4;
       this.Candidatedata.stream4 = res.stream4;
       this.Candidatedata.score4 = res.score4;
       this.Candidatedata.passout4 = res.passout4;
       this.Candidatedata.training = res.training;
       this.Candidatedata.organization = res.organization;
       this.Candidatedata.duration = res.duration;
       this.Candidatedata.description = res.description;
       this.Candidatedata.skills = res.skills;
       this.Candidatedata.resume = res.resume;
       this.Candidatedata.coverletter = res.coverletter;
       this.Candidatedata.photo = res.photo;
       this.Candidatedata.link = res.link;
    
    }
    )
    // .subscribe((data)=>{
    //   this.Candidatedata=JSON.parse(JSON.stringify(data));
    //   console.log(this.Candidatedata);
    //   this.router.navigate(['profile']);
    // })
 }
}
