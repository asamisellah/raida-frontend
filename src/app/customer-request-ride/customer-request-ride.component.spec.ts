import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestRideComponent } from './customer-request-ride.component';

describe('CustomerRequestRideComponent', () => {
  let component: CustomerRequestRideComponent;
  let fixture: ComponentFixture<CustomerRequestRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRequestRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRequestRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
