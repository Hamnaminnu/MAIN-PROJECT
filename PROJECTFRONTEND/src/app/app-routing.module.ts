import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CandidateaskComponent } from './candidateask/candidateask.component';
import { CandidatesearchComponent } from './candidatesearch/candidatesearch.component';
import { FormComponent } from './form/form.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { LoginComponent } from './login/login.component';
import { LoginrecruComponent } from './loginrecru/loginrecru.component';
import { ProfileComponent } from './profile/profile.component';
import { RecruiteraskComponent } from './recruiterask/recruiterask.component';
import { RecruiterformComponent } from './recruiterform/recruiterform.component';
import { RecruitprofileComponent } from './recruitprofile/recruitprofile.component';
import { RegisterComponent } from './register/register.component';
import { ShowapplicationsComponent } from './showapplications/showapplications.component';
import { SigninrecruComponent } from './signinrecru/signinrecru.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
// const routes: Routes = [];
const routes: Routes = [{path:'profile',component:ProfileComponent},
{path:'applications',component:ApplicationsComponent},{path:'aboutus',component:AboutusComponent},
{path:'jobsearch',component:JobsearchComponent},{path:'',component:WelcomeComponent},
{path:'signup',component:SignupComponent},{path:'form',component:FormComponent},
{path:'recruiterform',component:RecruiterformComponent},{path:'showapplication',component:ShowapplicationsComponent},
{path:'signinrecru',component:SigninrecruComponent},{path:'loginrecru',component:LoginrecruComponent},{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},{path:'recruiterprofile',component:RecruitprofileComponent},{path:'candidatesearch',component:CandidatesearchComponent},
{path:'candidateask',component:CandidateaskComponent},{path:'recruiterask',component:RecruiteraskComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
