import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user = [] as any;

  submitted = false;
  data: any;

  requiredForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    protected router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.requiredForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.requiredForm.controls;
  }

  submit() {

    this.submitted = true;

    if (this.requiredForm.invalid) {
      alert('Tutti i campi sono obbligatori');
      return;
    }
    this.formService.userData(JSON.stringify(this.requiredForm.value)).subscribe(res => {
      this.data = res;
      confirm("You can login now");
    this.router.navigate(['/']);
    })

  }
}
