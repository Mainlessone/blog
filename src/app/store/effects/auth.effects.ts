import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { LogInAction, AuthActionTypes, LogInSuccessAction, LogInFailureAction } from '../actions/auth.actions';

@Injectable()

export class AuthEffects {

  @Effect()
  logIn: Observable<any> = this.actions$.pipe(
    ofType<LogInAction>(AuthActionTypes.LOGIN),
    mergeMap((action) => this.authService.signIn(action.payload).pipe(
      map(data => new LogInSuccessAction(data)),
      catchError(error => of(new LogInFailureAction(error)))
    ))
  )

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      this.authService.setToken(user.payload.accessToken);
      this.router.navigateByUrl('/feed');
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
