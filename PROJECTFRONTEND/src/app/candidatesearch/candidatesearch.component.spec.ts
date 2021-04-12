import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesearchComponent } from './candidatesearch.component';

describe('CandidatesearchComponent', () => {
  let component: CandidatesearchComponent;
  let fixture: ComponentFixture<CandidatesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
