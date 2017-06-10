import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Validators, FormBuilder, FormControl, FormGroup } from "@angular/forms";

  function  hasExclamationMark(input: FormControl) {
    const hasExclamation = input.value != 'password';
    return hasExclamation ? null : { needsExclamation: true };
  }

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class loginComponent implements OnInit {
  title = "Login Form";

  constructor(private router: Router, private builder: FormBuilder) { }

  username = new FormControl('', [Validators.required, Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, hasExclamationMark]);

  loginForm: FormGroup = this.builder.group({ username: this.username, password: this.password});


  ngOnInit() {}

  logIn(){
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == '123456'){
      localStorage.setItem("token", 'qwerty123456');
    	this.router.navigate(['/admin']);
    }else{
      alert('Username & Password Salah.');
    }
  }

}
