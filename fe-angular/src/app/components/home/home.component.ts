import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private flights : FlightsService) { }

  ngOnInit(): void {

    this.flights.flightsData().subscribe( res => {
      this.data = res;

      console.log(this.data);

    })

  }

}
