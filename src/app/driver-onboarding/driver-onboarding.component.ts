import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Driver } from '../shared/driver.interface';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-driver-onboarding',
  templateUrl: './driver-onboarding.component.html',
  styleUrls: ['./driver-onboarding.component.sass'],
})
export class DriverOnboardingComponent {
  onboardDriverForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    phoneNumber: ['', Validators.required],
    location: this.fb.group({
      latitude: [null, Validators.required],
      longitude: [null, Validators.required],
    }),
    carMake: ['', Validators.required],
    carModel: ['', Validators.required],
    carDescription: ['', Validators.required],
    licenseNumber: ['', Validators.required],
    licensePlate: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private onboardDriverService: DriverService
  ) {}

  onSubmit() {
    // if (this.onboardDriverForm.valid) {
    //   this.onboardDriverService
    //     .onboardDriver(this.onboardDriverForm.value)
    //     .subscribe(
    //       (response) => {
    //         console.log('Driver onboarded successfully', response);
    //         // Navigate to a different page or show a success message
    //       },
    //       (error) => {
    //         console.error('Error onboarding driver', error);
    //         // Show an error message
    //       }
    //     );
    // } else {
    //   // Show validation error messages
    // }
  }
}
