import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient ) { }

  userData(data: any) {
    // console.log(data);

    return this.http.post('http://localhost:8888/users', data);
  }

  login(data: any){
    // console.log(data);

    return this.http.post('http://localhost:8888/login', data);
  }

}
