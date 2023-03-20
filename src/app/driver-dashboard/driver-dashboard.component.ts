import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.sass'],
})
export class DriverDashboardComponent {
  constructor(
    private socket: Socket,
    @Inject(DOCUMENT) private document: Document,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    let io;
    this.socket.on('connect', (soc: any) => {
      console.log('connected to socker.io server');
      io = soc;
    });
    this.socket.on('rideRequest', (data: any) => {
      const pickup = 'Runda';
      const destination = 'Karen';

      // Display notification to the driver
      const notification = this.document.getElementById('notification');
      if (notification) {
        notification.innerHTML = `New ride request. Pickup location: ${pickup}. Destination: ${destination}.`;

        // Allow driver to accept or reject the ride request
        const acceptButton = document.createElement('button');
        acceptButton.innerHTML = 'Accept';
        acceptButton.onclick = () => {
          this.socket.emit('acceptRide').disconnect();
          notification.innerHTML = 'Ride accepted';
        };

        const rejectButton = document.createElement('button');
        rejectButton.innerHTML = 'Reject';
        rejectButton.onclick = () => {
          this.socket.emit('rejectRide').disconnect();
          notification.innerHTML = 'Ride rejected';
        };

        notification.appendChild(acceptButton);
        notification.appendChild(rejectButton);
      }
      this.cd.detectChanges();
    });
    this.socket.on('connect_error', (error: any) => {
      console.log('error connecting to socker.io server', error);
      this.socket.disconnect();
    });
    this.cd.detectChanges();
  }

  ngOnInit() {}
}
