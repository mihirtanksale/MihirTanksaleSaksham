import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGalleryDetailsComponent } from './admin-gallery-details.component';

describe('AdminGalleryDetailsComponent', () => {
  let component: AdminGalleryDetailsComponent;
  let fixture: ComponentFixture<AdminGalleryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGalleryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGalleryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
