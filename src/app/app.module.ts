import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRequestRideModule } from './customer-request-ride/customer-request-ride.module';
import { DriverOnboardingModule } from './driver-onboarding/driver-onboarding.module';
import { LandingComponent } from './pages/landing/landing.component';
import { DriverDashboardModule } from './driver-dashboard/driver-dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config: SocketIoConfig = { url: 'http://127.0.0.1:3000', options: {transports: ['polling'] } };

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DriverOnboardingModule,
    CustomerRequestRideModule,
    DriverDashboardModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
