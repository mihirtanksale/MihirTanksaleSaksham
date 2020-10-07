import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyedonationComponent } from './eyedonation.component';

describe('EyedonationComponent', () => {
  let component: EyedonationComponent;
  let fixture: ComponentFixture<EyedonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyedonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyedonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
