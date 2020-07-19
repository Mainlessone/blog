import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SignUpAction, SignUpActionTypes, SignUpSuccessAction, SignUpFailureAction } from '../actions/signup.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

@Injectable()

export class SignUpEffects {

  @Effect()
  signUp: Observable<any> = this.actions$.pipe(
    ofType<SignUpAction>(SignUpActionTypes.SIGNUP),
    mergeMap((action) => this.authService.singUp(action.payload).pipe(
      map(data => new SignUpSuccessAction(data)),
      catchError(error => of(new SignUpFailureAction(error)))
    ))
  )

  @Effect({ dispatch: false })
  signUpSuccess: Observable<any> = this.actions$.pipe(
    ofType<SignUpSuccessAction>(SignUpActionTypes.SIGNUP_SUCCESS),
    tap(x => this.router.navigateByUrl('/signIn'))
  )

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }
}
