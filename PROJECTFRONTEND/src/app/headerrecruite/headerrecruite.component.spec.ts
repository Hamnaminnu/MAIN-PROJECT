import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderrecruiteComponent } from './headerrecruite.component';

describe('HeaderrecruiteComponent', () => {
  let component: HeaderrecruiteComponent;
  let fixture: ComponentFixture<HeaderrecruiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderrecruiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderrecruiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
