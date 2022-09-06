import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user = [] as any;

  form!: FormGroup;
  submitted = false;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }


  get f() {
    return this.form.controls;
  }

  submit() {

    this.submitted = true;

    if (this.form.invalid) {
      console.log('Tutti i campi sono obbligatori');
      return;
    }
    this.formService.userData(JSON.stringify(this.form.value)).subscribe(res => {
      this.data = res;
    })
  }
}
