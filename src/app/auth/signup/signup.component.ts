import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpDto = {
    nickName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  signUp(): void {
    console.log(this.signUpDto);
  }

}
