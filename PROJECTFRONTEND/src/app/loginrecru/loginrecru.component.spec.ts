import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrecruComponent } from './loginrecru.component';

describe('LoginrecruComponent', () => {
  let component: LoginrecruComponent;
  let fixture: ComponentFixture<LoginrecruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginrecruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrecruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
