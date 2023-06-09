import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Driver } from "../shared/driver.interface";
import { DriverService } from "../services/driver.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-driver-onboarding",
  templateUrl: "./driver-onboarding.component.html",
  styleUrls: ["./driver-onboarding.component.sass"],
})
export class DriverOnboardingComponent {
  onboardDriverForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    username: ["", Validators.required],
    phoneNumber: ["", Validators.required],
    location: this.fb.group({
      latitude: <number | null>null,
      longitude: <number | null>null,
    }),
    carMake: ["", Validators.required],
    carModel: ["", Validators.required],
    carDescription: "",
    licensePlate: ["", Validators.required],
  });

  showFailureMessage: boolean = false;
  failureMsg: string = "";
  error: string | undefined = undefined;

  constructor(
    private fb: FormBuilder,
    private onboardDriverService: DriverService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGeoLocation();
  }

  onSubmit() {
    console.log(this.onboardDriverForm);
    if (this.onboardDriverForm.valid) {
      this.onboardDriverService
        .onboardDriver(this.onboardDriverForm.value as Driver)
        .subscribe(
          (response) => {
            console.log("Driver onboarded successfully", response);
            // Navigate to a different page or show a success message
            this.router.navigate(["/driver/dashboard"]);
          },
          (error) => {
            console.error("Error onboarding driver", error);
            // Show an error message
            this.showFailureMessage = true;
            this.failureMsg = error.error.message;
            this.error = error.error.errors;
          }
        );
    } else {
      // Show validation error messages
      this.onboardDriverForm.markAllAsTouched();
    }
  }

  getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        this.onboardDriverForm.get("location")?.patchValue({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
