import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  public flights = [] as any;
  public cities = [] as any;

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsList();
  }

  flightsList() {
    this.flightsService.getFlights().subscribe( res => {
      this.flights = res;
    })
  }



}
