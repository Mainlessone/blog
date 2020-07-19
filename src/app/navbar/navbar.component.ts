import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.interface';
import { LogOutAction } from '../store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private store$: Store<AppState>) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.store$.dispatch(new LogOutAction());
  }





}
