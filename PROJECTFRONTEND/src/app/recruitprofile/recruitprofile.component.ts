import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';
@Component({
  selector: 'app-recruitprofile',
  templateUrl: './recruitprofile.component.html',
  styleUrls: ['./recruitprofile.component.css']
})
export class RecruitprofileComponent implements OnInit {
  Recruiterdata = {
    name : ' ',
    intro : ' ',
    description : ' ',
    reasponsibilities : ' ',
    skills : ' '
  }
  profiles={
    aname:' '
  }
  constructor(private ProfileService: ProfileService) { }

  ngOnInit(): void {
  }
  profile(){
    // let id = profiles.email ;
    console.log(this.profiles.aname)
    this.ProfileService.getRecruiterdata(this.profiles.aname).subscribe(
     
      res =>  {
       this.Recruiterdata.name = res.name;
       this.Recruiterdata.intro = res.intro;
       this.Recruiterdata.description = res.description;
       this.Recruiterdata.reasponsibilities = res.reasponsibilities;
       this.Recruiterdata.skills = res.skills;
      
    }
    )
    
 }
}
