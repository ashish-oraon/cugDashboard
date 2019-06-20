import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'http://192.168.11.112:8080/plant_cug';

  constructor(private http: HttpClient) { }

  getCugAllocationData(){
    return this.http.get(this.dataUrl);
  }
}
