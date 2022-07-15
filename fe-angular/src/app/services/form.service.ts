import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient ) { }

  // userData(data: any) {
  //   return this.http.post('http://localhost/projects/backend/', data);
  // }

  userData(data: any) {
    return this.http.get('http://localhost/projects/backend/cities');
  }

}
