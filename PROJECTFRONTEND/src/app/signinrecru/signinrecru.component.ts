import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-signinrecru',
  templateUrl: './signinrecru.component.html',
  styleUrls: ['./signinrecru.component.css']
})
export class SigninrecruComponent implements OnInit {
  user={
    uname:' ',
    password:' '
  }
  constructor(private ProfileService : ProfileService,private router : Router) { }

  ngOnInit(): void {
    
  }
  Adddata()
  {    
    this.ProfileService.newRecruiteruser(this.user);
    console.log("Called");    
    this.router.navigate(['/loginrecru']);
  }


}
