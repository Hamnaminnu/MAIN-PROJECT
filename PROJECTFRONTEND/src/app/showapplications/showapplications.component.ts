import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService} from '../profile.service';
@Component({
  selector: 'app-showapplications',
  templateUrl: './showapplications.component.html',
  styleUrls: ['./showapplications.component.css']
})
export class ShowapplicationsComponent implements OnInit {
  // profiles={
  //   email:' '
  // }
  // onedata={
  //   cname: ' ',
  //   email:' '
  // }
  jobdat=[{
    name:' ',
    email:' ',
    comname: ' ',
    description:' '
  }]
  constructor(private ProfileService: ProfileService,private router : Router) { }

  ngOnInit(): void { this.ProfileService.getapplicationdata().subscribe((data)=>{
    this.jobdat=JSON.parse(JSON.stringify(data));
    console.log(this.jobdat)
  })
}
}
