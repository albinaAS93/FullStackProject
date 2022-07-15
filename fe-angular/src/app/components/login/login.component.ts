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
  ) { }

  form!: FormGroup;
  submitted = false;
  data:any;
  token: any;

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm(){
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ]
    })
  }

  get f(){
    return this.form.controls;
  }

  submit() {

    // this.router.navigate(['/home']);

    // this.submitted = true;

    // if(this.form.invalid){
    //   return;

    // }

    localStorage.setItem('isLogged', '0');

    this.formService.login(JSON.stringify(this.form.value)).subscribe(res => {
      this.data = res;
      console.log(this.data.message);

      if(this.data.message == '1') {
        localStorage.setItem('isLogged', '1');
        this.router.navigate(['/home']);
      }else {
        alert("Email o password errata");
      }


    });

  }

}
