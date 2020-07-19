import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.interface';
import { SignUpAction } from 'src/app/store/actions/signup.actions';

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

  constructor(private readonly store$: Store<AppState>) { }

  ngOnInit(): void {
  }

  signUp(): void {
    if (this.signUpDto.email && this.signUpDto.password) this.store$.dispatch(new SignUpAction(this.signUpDto));
  }

}
