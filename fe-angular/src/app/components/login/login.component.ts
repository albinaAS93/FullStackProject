import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router
<<<<<<< HEAD
  ) {
=======
  ) { 
>>>>>>> f5d6adb5b7e2bb9b1a506664f1fd30b2f87d28b9
    this.loginForm();
  }

  requiredForm!: FormGroup;
  submitted = false;
  data: any;
  token: any;

  loginForm(){
    this.requiredForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ]
    });
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f() {
    return this.requiredForm.controls;
<<<<<<< HEAD
=======
  }

  loginForm(){
    this.requiredForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ]
    })
>>>>>>> f5d6adb5b7e2bb9b1a506664f1fd30b2f87d28b9
  }

  submit() {

    this.submitted = true;
<<<<<<< HEAD

    if(this.requiredForm.invalid){
      alert('Tutti i campi sono obbligatori');
      return;
    }
=======
>>>>>>> f5d6adb5b7e2bb9b1a506664f1fd30b2f87d28b9

    localStorage.setItem('isLogged', '0');

    console.log(this.requiredForm.value);

<<<<<<< HEAD
=======
    if(this.requiredForm.invalid){
      alert('Tutti i campi sono obbligatori');
      return;
    }
>>>>>>> f5d6adb5b7e2bb9b1a506664f1fd30b2f87d28b9
    this.formService.login(JSON.stringify(this.requiredForm.value)).subscribe(res => {
      this.data = res;

      this.router.navigate(['/']);
      
      console.log(this.data.message);

      if(this.data.message == '1') {
        localStorage.setItem('isLogged', '1');
        this.router.navigate(['/']);
      }else {
        console.log("Email o password errata");
      }


    });

  }

}
