import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ) { }

  ngOnInit(): void {
  }

  submit() {
    
  }


}
