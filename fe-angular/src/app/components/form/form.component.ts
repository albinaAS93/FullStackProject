import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]]
      // confirmPass: ['', Validators.required]
    },
    {
      // validator: MustMatch('password', 'confirmPass')
    });
  }

  ngOnInit(): void {

    this.createForm();

  }

  submit() {

    console.log(this.form.value);

    this.formService.userData(JSON.stringify(this.form.value)).subscribe( res => {
      this.data = res;

      console.log(this.data);

    })

  }

}
