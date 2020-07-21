import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { LogInAction, AuthActionTypes, LogInSuccessAction, LogInFailureAction, LogOutAction, CheckLoginAction } from '../actions/auth.actions';

@Injectable()

export class AuthEffects {

  @Effect()
  logIn: Observable<any> = this.actions$.pipe(
    ofType<LogInAction>(AuthActionTypes.LOGIN),
    mergeMap((action) => this.authService.signIn(action.payload).pipe(
      map(data => new LogInSuccessAction(data)),
      catchError(error => of(new LogInFailureAction(error)))
    ))
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions$.pipe(
    ofType<LogInSuccessAction>(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      this.authService.setToken(user.payload.token);
      // this.router.navigateByUrl('/feed');
    })
  );

  @Effect()
  CheckLogin: Observable<any> = this.actions$.pipe(
    ofType<CheckLoginAction>(AuthActionTypes.CHECK_LOGIN),
    mergeMap(action => {
      const token = this.authService.getToken();
      if (token) return this.authService.checkTokenInDb(token).pipe(
        map(res => {
          if (res) return new LogInSuccessAction(res);
          else {
            this.authService.removeToken();
            return of(new LogInFailureAction(res));
          }
        }),
        catchError(error => {
          this.router.navigate(['/signIn']);
          return of(new LogOutAction());
        })
      )
      else return of(new LogInFailureAction(null));
    }
    )
  )

  @Effect({ dispatch: false })
  LogOut: Observable<any> = this.actions$.pipe(
    ofType<LogOutAction>(AuthActionTypes.LOGOUT),
    tap(_ => this.authService.logOut())
  )

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }
}
