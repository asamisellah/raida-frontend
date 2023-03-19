import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverOnboardingComponent } from './driver-onboarding.component';



@NgModule({
  declarations: [DriverOnboardingComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class DriverOnboardingModule {}
