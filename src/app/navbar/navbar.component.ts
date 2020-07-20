import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.interface';
import { LogOutAction } from '../store/actions/auth.actions';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: Observable<boolean> = of(false);
  errorMessage: string | null;

  constructor(private authService: AuthService, private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store$.select(store => store.auth.isAuthenticated);
  }

  logOut(): void {
    this.store$.dispatch(new LogOutAction());
  }





}
