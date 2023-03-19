import { Location } from './location.interface';

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
