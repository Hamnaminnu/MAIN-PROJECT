import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowapplicationsComponent } from './showapplications.component';

describe('ShowapplicationsComponent', () => {
  let component: ShowapplicationsComponent;
  let fixture: ComponentFixture<ShowapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
