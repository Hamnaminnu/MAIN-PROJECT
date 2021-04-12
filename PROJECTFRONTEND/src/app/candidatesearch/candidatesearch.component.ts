import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';
@Component({
  selector: 'app-candidatesearch',
  templateUrl: './candidatesearch.component.html',
  styleUrls: ['./candidatesearch.component.css']
})
export class CandidatesearchComponent implements OnInit {
  Candidatedata = [{
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
  }]
  // Candidatedata: ProfileModel["",""];

  constructor(private ProfileService: ProfileService) { }

  ngOnInit(): void {
    this.ProfileService.getCandidatedatas().subscribe((data)=>{
      this.Candidatedata=JSON.parse(JSON.stringify(data));
    })
  }
}
