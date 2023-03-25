import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DriverOnboardingComponent } from "./driver-onboarding.component";
import { DriverService } from "../services/driver.service";

@NgModule({
  declarations: [DriverOnboardingComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [DriverService],
})
export class DriverOnboardingModule {}
