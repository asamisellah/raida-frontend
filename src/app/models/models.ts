export interface Driver {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: Location;
  carMake: string;
  carModel: string;
  carDescription: string;
  licenseNumber: string;
  licensePlate: string;
}
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
export interface Location {
  latitude: number;
  longitude: number;
}
export enum RideStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  STARTED = 'STARTED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
