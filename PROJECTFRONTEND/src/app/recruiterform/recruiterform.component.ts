import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-recruiterform',
  templateUrl: './recruiterform.component.html',
  styleUrls: ['./recruiterform.component.css']
})
export class RecruiterformComponent implements OnInit {
  RecruiterItem={
    name : ' ',
    intro : ' ',
    description : ' ',
    reasponsibilities : ' ',
    skills : ' '
  }
  constructor(private ProfileService: ProfileService,private router : Router) { }

  ngOnInit(): void {
  }
  Adddata()
  {    
    this.ProfileService.newRecruiterdata(this.RecruiterItem);
    console.log("Called");    
    this.router.navigate(['/recruiterask']);
  }
}
