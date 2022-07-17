import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICities } from '../components/flights/cities';
import { IFlights } from '../components/flights/flights';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private _url = 'http://localhost:8888/flights';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<IFlights> {
    return this.http.get<IFlights>(this._url);
  }

  getCities() {
    return this.http.get('http://localhost:8888/cities');
  }

  addFlight(data: any){
    return this.http.post('http://localhost:8888/cities', data);
  }

}
