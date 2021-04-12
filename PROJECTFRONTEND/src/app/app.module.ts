import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { ApplicationsComponent } from './applications/applications.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecruiterformComponent } from './recruiterform/recruiterform.component';
import { ShowapplicationsComponent } from './showapplications/showapplications.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { LoginrecruComponent } from './loginrecru/loginrecru.component';
import { SigninrecruComponent } from './signinrecru/signinrecru.component';
import { RecruitprofileComponent } from './recruitprofile/recruitprofile.component';
import { CandidatesearchComponent } from './candidatesearch/candidatesearch.component';
import { CandidateaskComponent } from './candidateask/candidateask.component';
import { RecruiteraskComponent } from './recruiterask/recruiterask.component';
import { HeaderrecruiteComponent } from './headerrecruite/headerrecruite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    JobsearchComponent,
    ApplicationsComponent,
    AboutusComponent,
    FooterComponent,
    FormComponent,
    RecruiterformComponent,
    ShowapplicationsComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
    LoginrecruComponent,
    SigninrecruComponent,
    RecruitprofileComponent,
    CandidatesearchComponent,
    CandidateaskComponent,
    RecruiteraskComponent,
    HeaderrecruiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
