import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService} from '../profile.service';
@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {
  Recruiterdata = [{
    name : ' ',
    intro : ' ',
    description : ' ',
    reasponsibilities : ' ',
    skills : ' '
  }]
  
  constructor(private ProfileService: ProfileService,private router : Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ProfileService.getRecruiterdatas().subscribe((data)=>{
      this.Recruiterdata=JSON.parse(JSON.stringify(data));
     
    })
  }
check(){ this.router.navigate(['applications']);}
}
