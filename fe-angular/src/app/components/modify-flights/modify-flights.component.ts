import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-modify-flights',
  templateUrl: './modify-flights.component.html',
  styleUrls: ['./modify-flights.component.css']
})
export class ModifyFlightsComponent implements OnInit {

  public cities = [] as any;
  public flights = [] as any;

  form!: FormGroup;
  submitted = false;
  data: any;

  constructor(
    private flightsService: FlightsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  createForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      availableSeats: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.citiesList();
    this.flightsList();
  }

  citiesList() {
    this.flightsService.getCities().subscribe( res => {
      this.cities = res;
    })
  }

  flightsList() {
    this.flightsService.getFlights().subscribe( res => {
      this.flights = res;
    })
  }

  add() {
    confirm("Flight has been added.");
    this.flightsService.addFlight(this.form.value).subscribe(res => {
      this.data = res;
    });
  }

  update() {
    confirm("Flight has been updated.");
    this.flightsService.updateFlight(this.form.value).subscribe(res => {
      this.data = res;
    });
  }

}
