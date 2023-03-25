import { ChangeDetectorRef, Component, Inject } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-driver-dashboard",
  templateUrl: "./driver-dashboard.component.html",
  styleUrls: ["./driver-dashboard.component.sass"],
})
export class DriverDashboardComponent {
  rideRequest: any;

  constructor(private socket: Socket, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.socket.on("connect", (soc: any) => {
      console.log("connected to socker.io server");
    });
    this.socket.on("rideRequest", (ride: any) => {
      this.rideRequest = ride;
    });
  }

  acceptRequest() {
    this.socket.emit("acceptRide");
    this.rideRequest = null;
  }
  rejectRequest() {
    this.socket.emit("rejectRide");
    this.rideRequest = null;
  }
}
