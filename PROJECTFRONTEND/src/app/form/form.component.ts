import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { ProfileModel } from '../profile/profile.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private ProfileService : ProfileService,private router : Router) { }
  CandidateItem= {
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
  ngOnInit(): void {
  }
  Adddata()
  {    
    this.ProfileService.newCandidatedata(this.CandidateItem);
    console.log("Called");    
    this.router.navigate(['/candidateask']);
  }
}
