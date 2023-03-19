import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ride } from '../shared/general.interfaces';

@Injectable({
  providedIn: 'root',
})
export class RideService {
  private apiUrl = 'http://127.0.0.1:3000/drivers';

  constructor(private http: HttpClient) {}

  requestRide(ride: Ride): Observable<Ride> {
    return this.http.post<any>(`${this.apiUrl}/request`, ride);
  }
}
