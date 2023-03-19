import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRequestRideComponent } from './customer-request-ride.component';

@NgModule({
  declarations: [CustomerRequestRideComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class CustomerRequestRideModule {}
