import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RideService } from "../services/ride.service";
import { Ride } from "../shared/general.interfaces";

@Component({
  selector: "app-customer-request-ride",
  templateUrl: "./customer-request-ride.component.html",
  styleUrls: ["./customer-request-ride.component.sass"],
})
export class CustomerRequestRideComponent implements OnInit {
  rideRequestForm: any;
  status: string | undefined;

  constructor(
    private fb: FormBuilder,
    private rideRequestService: RideService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.rideRequestForm = this.fb.group({
      pickupLongitude: [<number | null>null, Validators.required],
      pickupLatitude: [<number | null>null, Validators.required],
      destinationLongitude: [<number | null>null, Validators.required],
      destinationLatitude: [<number | null>null, Validators.required],
      passengerId: ["641ece396eb3c1f9b4fb689f", Validators.required],
    });
  }

  onSubmit(): void {
    this.status = undefined;
    console.log("Ride Request Form: ", this.rideRequestForm);
    if (this.rideRequestForm.valid) {
      const rideRequest: Ride = {
        pickup: {
          longitude: this.rideRequestForm.value.pickupLongitude,
          latitude: this.rideRequestForm.value.pickupLatitude,
        },
        destination: {
          longitude: this.rideRequestForm.value.destinationLongitude,
          latitude: this.rideRequestForm.value.destinationLatitude,
        },
        passangerId: this.rideRequestForm.value.passengerId,
      };

      this.status = "Creating Ride Request...";

      this.rideRequestService.requestRide(rideRequest).subscribe(
        (response) => {
          console.log("Ride Request Created: ", response);
          this.status = "Driver Found!";
          this.cd.detectChanges();
        },
        (error) => {
          console.log("Error Creating Ride Request: ", error);
          this.status = "Error Creating Ride Request";

          this.cd.detectChanges();
        }
      );
    } else {
      this.status = "Invalid Ride Request";
    }
    this.cd.detectChanges();
  }
}
