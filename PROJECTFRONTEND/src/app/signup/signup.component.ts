import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    uname:' ',
    password:' '
  }
  constructor(private ProfileService : ProfileService,private router : Router) { }

  ngOnInit(): void {
    
  }
  Adddata()
  {    
    this.ProfileService.newCandidateuser(this.user);
    console.log("Called");    
    this.router.navigate(['/login']);
  }

}
