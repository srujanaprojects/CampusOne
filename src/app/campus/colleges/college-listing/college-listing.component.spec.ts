import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeComponent } from './college-listing.component';

describe('UserListingComponent', () => {
  let component: CollegeComponent;
  let fixture: ComponentFixture<CollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeComponent]
    });
    fixture = TestBed.createComponent(CollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
