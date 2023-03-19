import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRequestRideComponent } from './customer-request-ride/customer-request-ride.component';
import { DriverOnboardingComponent } from './driver-onboarding/driver-onboarding.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'onboard-driver', component: DriverOnboardingComponent },
  { path: 'request-ride', component: CustomerRequestRideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
