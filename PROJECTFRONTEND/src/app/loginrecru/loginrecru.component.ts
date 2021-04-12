import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginrecru',
  templateUrl: './loginrecru.component.html',
  styleUrls: ['./loginrecru.component.css']
})
export class LoginrecruComponent implements OnInit {
  user={
    uname:' ',
    password:' '
  }
  constructor(private ProfileService : ProfileService,private router : Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  check()
  {    
    // this.ProfileService.newusercheck(this.user);
    // console.log("Called");    
    this.ProfileService.newrecusercheck(this.user).subscribe(
     
      res =>  {
        // let res={};
      { if(res.message =="success"){
        this.router.navigate(['recruiterask']);
      }
       if(res.message =="fail"){
        this.router.navigate(['loginrecru']);
        alert('invalid username or password');
      }
    }
    })
   }    
}
