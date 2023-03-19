export interface Ride {
  id: number;
  customerId: number;
  driverId: number;
  pickupLocation: Location;
  destinationLocation: Location;
  status: RideStatus;
  createdAt: Date;
  updatedAt: Date;
}
export enum RideStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  STARTED = 'STARTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
