import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  item={
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
  }
  item2={
    name : ' ',
    intro : ' ',
    description : ' ',
    reasponsibilities : ' ',
    skills : ' '
  }
  item3={
    uname:" ",
    password:" "
  }
  item4 = {
    uname:" ",
    password:" "
  }
  item5 = {
    uname:" ",
    password:" "
  }
  item7 = {
    uname:" ",
    password:" "
  }
  item6={
    email:" "
  }
  item9={
    email:' ',
    uname:' ',
    rname: ' ',
    description:' '
  }
  constructor( private http:HttpClient) { }
  getCandidatedata(id:any){
    return this.http.get<any>("http://localhost:3000/profile/"+id)
  }
  getonejobdata(id:any){
    return this.http.get<any>("http://localhost:3000/jobdata/"+id)
  }
  getapplicationdata(){
    return this.http.get<any>("http://localhost:3000/recjobdata/")
  }
  getCandidatedatas(){
    return this.http.get<any>("http://localhost:3000/profile/")
  }
  newCandidatedata(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"Candidatedata":item})
    .subscribe(data =>{console.log(data)})
  }
  getRecruiterdatas(){
    return this.http.get("http://localhost:3000/recruiterprofile");
  }
  getRecruiterdata(id:any){
    return this.http.get<any>("http://localhost:3000/recruiterprofile/"+id)
  }
  newRecruiterdata(item2:any)
  {   
    return this.http.post("http://localhost:3000/insertrecruiter",{"Recruiterdata":item2})
    .subscribe(data =>{console.log(data)})
  }
  newCandidateuser(item3:any){
    return this.http.post("http://localhost:3000/userdata",{"Candidateuser":item3})
    .subscribe(data =>{console.log(data)})
  }
  newjobdata(item9:any){
    return this.http.post("http://localhost:3000/jobdata",{"jobdat":item9})
    .subscribe(data =>{console.log(data)})
  
  }
  newRecruiteruser(item4:any){
    return this.http.post("http://localhost:3000/recuserdata",{"Recruiteruser":item4})
    .subscribe(data =>{console.log(data)})
  }
  newusercheck(item5:any){
    return this.http.post<any>("http://localhost:3000/usercheck",{"usercheck":item5})
    
  }
  newrecusercheck(item7:any){
    return this.http.post<any>("http://localhost:3000/recusercheck",{"usercheck":item7})
    
  }
  // newprofilecheck(item6:any){
  //   return this.http.post("http://localhost:3000/profilecheck",{"profilecheck":item6})
  //   .subscribe(data =>{console.log(data)})
  // }
}