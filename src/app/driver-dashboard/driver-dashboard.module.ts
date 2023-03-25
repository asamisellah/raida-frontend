import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DriverDashboardComponent } from "./driver-dashboard.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [DriverDashboardComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
  ],
})
export class DriverDashboardModule {}
