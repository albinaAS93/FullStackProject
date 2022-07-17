import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  // id : number;
  // departure: string;
  // arrival: string;
  // availableSeats: number;

  constructor(private flights : FlightsService) { }

  ngOnInit(): void {

    this.flights.flights().subscribe( res => {
      this.data = res;

      console.log(this.data);

    })

  }

}
