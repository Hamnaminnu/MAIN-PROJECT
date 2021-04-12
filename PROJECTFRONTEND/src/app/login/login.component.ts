import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    this.ProfileService.newusercheck(this.user).subscribe(
     
      res =>  {
        // let res={};
        console.log(res);
      { if(res.message =="success"){
        this.router.navigate(['candidateask']);
      }
       if(res.message =="fail"){
        this.router.navigate(['login']);
        alert('invalid username or password');
      }
    }
    })
   }    
  }  
   

