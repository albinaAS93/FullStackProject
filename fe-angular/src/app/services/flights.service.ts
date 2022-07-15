import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  flightsData() {
    console.log();

    return this.http.get('http://localhost:8888/flights');
  }

}
