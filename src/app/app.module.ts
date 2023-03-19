import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRequestRideModule } from './customer-request-ride/customer-request-ride.module';
import { DriverOnboardingModule } from './driver-onboarding/driver-onboarding.module';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DriverOnboardingModule,
    CustomerRequestRideModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
