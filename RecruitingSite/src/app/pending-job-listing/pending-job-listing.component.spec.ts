import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingJobListingComponent } from './pending-job-listing.component';

describe('PendingJobListingComponent', () => {
  let component: PendingJobListingComponent;
  let fixture: ComponentFixture<PendingJobListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingJobListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
