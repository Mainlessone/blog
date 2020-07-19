import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[LOGIN] login',
  LOGIN_SUCCESS = '[LOGIN] success',
  LOGIN_FAILURE = '[LOGIN] failure'
}

export class LogInAction implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: any) { }
}

export class LogInSuccessAction implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class LogInFailureAction implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;

  constructor(public payload: any) { }
}

export type AuthActions =

  | LogInAction
  | LogInSuccessAction
  | LogInFailureAction
