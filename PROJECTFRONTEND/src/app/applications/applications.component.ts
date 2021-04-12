import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService} from '../profile.service';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  jobdat={
    email:' ',
    uname:' ',
    rname: ' ',
    description:' '
  }
  profiles={
    email:' '
  }
  onedata={
    rname: ' ',
    description:' '
  }
  constructor(private ProfileService: ProfileService,private router : Router) { }

  ngOnInit(): void {
  }
  jobdata(){this.ProfileService.newjobdata(this.jobdat);
  
  alert("success")
}
 statusprofile(){
 
    // let id = profiles.email ;
    
    this.ProfileService.getonejobdata(this.profiles.email).subscribe(
     
      res =>  {
       this.onedata.rname = res.comname;
       this.onedata.description = res.description;
      
    }
    )
    
 }
 
}
