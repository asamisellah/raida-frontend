export interface Ride {
  pickup: {
    longitude: number;
    latitude: number;
  };
  destination: {
    longitude: number;
    latitude: number;
  };
  passangerId: string;
}

export enum RideStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  STARTED = "STARTED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
