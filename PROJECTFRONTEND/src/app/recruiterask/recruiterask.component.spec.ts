import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiteraskComponent } from './recruiterask.component';

describe('RecruiteraskComponent', () => {
  let component: RecruiteraskComponent;
  let fixture: ComponentFixture<RecruiteraskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiteraskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiteraskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
