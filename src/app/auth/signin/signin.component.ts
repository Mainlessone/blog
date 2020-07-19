import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app-state.interface'
import { LogInAction } from 'src/app/store/actions/auth.actions';

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

  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
  }

  signIn(event): void {
    if (this.signInDto.email && this.signInDto.password) this.store$.dispatch(new LogInAction(this.signInDto));
  }

}
