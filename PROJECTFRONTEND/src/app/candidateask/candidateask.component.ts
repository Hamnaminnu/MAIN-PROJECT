import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-candidateask',
  templateUrl: './candidateask.component.html',
  styleUrls: ['./candidateask.component.css']
})
export class CandidateaskComponent implements OnInit {

  constructor(private ProfileService : ProfileService,private router : Router) { }

  ngOnInit(): void {
  
  }
}
