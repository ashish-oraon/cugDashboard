import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'http://192.168.11.112:8080/plant_cug';


  constructor(private http: HttpClient) { }

  
  getCugAllocationData(data) {
    return this.http.post(this.dataUrl, data, httpOptions);
  }
  getThresholdData(data) {
    return this.http.post(this.dataUrl, data, httpOptions)
    // .pipe(
    // catchError(this.handleError('addHero', hero))
    // );
  }
  getThresholdPlantwiseData(data) {
    return this.http.post(this.dataUrl, data, httpOptions)
    // .pipe(
    // catchError(this.handleError('addHero', hero))
    // );
  }
}
