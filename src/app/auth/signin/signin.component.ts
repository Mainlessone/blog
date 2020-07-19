import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInDto = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  signIn(event) {
    if (this.signInDto.email && this.signInDto.password) console.log(this.signInDto)
  }

}
