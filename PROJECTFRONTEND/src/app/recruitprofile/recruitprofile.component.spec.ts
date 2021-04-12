import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitprofileComponent } from './recruitprofile.component';

describe('RecruitprofileComponent', () => {
  let component: RecruitprofileComponent;
  let fixture: ComponentFixture<RecruitprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
