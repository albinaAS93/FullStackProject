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
  }

  get f() {
    return this.form.controls;
  }

  add() {
    this.flightsService.addFlight(this.form.value).subscribe(res => {
      this.data = res;
    });
  }

  update() {
    this.flightsService.updateFlight(this.form.value).subscribe(res => {
      this.data = res;
    });
  }

  delete() {
    console.log(this.form.value);

    this.flightsService.deleteFlight(this.form.value).subscribe(res => {
      this.data = res;
      console.log(this.data);

    });
  }


}
