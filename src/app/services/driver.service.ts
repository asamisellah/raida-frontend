import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../shared/driver.interface';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private apiUrl = 'http://127.0.0.1:3000/drivers';

  constructor(private http: HttpClient) {}

  onboardDriver(driver: Driver): Observable<Driver> {
    console.log(driver);
    return this.http.post<Driver>(`${this.apiUrl}/create`, driver);
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiUrl}`);
  }

  getDriverById(id: string): Observable<Driver> {
    return this.http.get<Driver>(`${this.apiUrl}/${id}`);
  }

  updateDriver(id: string, driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.apiUrl}/${id}`, driver);
  }

  deleteDriver(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
