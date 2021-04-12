import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateaskComponent } from './candidateask.component';

describe('CandidateaskComponent', () => {
  let component: CandidateaskComponent;
  let fixture: ComponentFixture<CandidateaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
