import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-customer-request-ride',
  templateUrl: './customer-request-ride.component.html',
  styleUrls: ['./customer-request-ride.component.sass'],
})
export class CustomerRequestRideComponent implements OnInit {
  rideRequestForm: any;
  status: string | undefined;

  constructor(
    private fb: FormBuilder,
    private rideRequestService: RideService
  ) {}

  ngOnInit(): void {
    this.rideRequestForm = this.fb.group({
      pickup: this.fb.group({
        longitude: ['36.8205454'],
        latitude: [-1.162667],
      }),
      destination: this.fb.group({
        longitude: [36.81107818730816],
        latitude: [-1.2365680364174565],
      }),
      passengerId: ['641390be02533b1bb8cb4bf9'],
    });

    // subscribe to form value changes to get pickup and destination locations
    // this.rideRequestForm.valueChanges.subscribe((values) => {
    //   const pickup = values.pickup;
    //   const destination = values.destination;
    //   console.log('Pickup Location: ', pickup.longitude, pickup.latitude);
    //   console.log(
    //     'Destination Location: ',
    //     destination.longitude,
    //     destination.latitude
    //   );
    // });
  }
  onSubmit(): void {
    console.log('Ride Request Form: ', this.rideRequestForm);
    if (!this.rideRequestForm || !this.rideRequestForm.invalid) {
      this.status = 'Invalid request';
    }
    const rideRequest = this.rideRequestForm?.value;
    this.status = 'Creating Ride Request...';

    this.rideRequestService.requestRide(rideRequest).subscribe(
      (response) => {
        console.log('Ride Request Created: ', response);
        this.status = 'Ride Request Created';
      },
      (error) => {
        console.log('Error Creating Ride Request: ', error);
        this.status = 'Error Creating Ride Request';
      }
    );
  }
}
