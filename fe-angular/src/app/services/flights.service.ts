import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private _url = 'http://localhost:8888/flights';

  constructor(private http: HttpClient) { }

  flights() {
    return this.http.get(this._url);
  }

}
