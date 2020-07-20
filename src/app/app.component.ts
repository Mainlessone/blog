import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.interface';
import { CheckLoginAction } from './store/actions/auth.actions';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-blog';

  constructor(private readonly store$: Store<AppState>, private authService: AuthService) { }

  ngOnInit(): void {
    this.store$.dispatch(new CheckLoginAction());
  }
}
