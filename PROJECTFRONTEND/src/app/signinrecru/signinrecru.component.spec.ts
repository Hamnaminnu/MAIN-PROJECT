import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninrecruComponent } from './signinrecru.component';

describe('SigninrecruComponent', () => {
  let component: SigninrecruComponent;
  let fixture: ComponentFixture<SigninrecruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninrecruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninrecruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
