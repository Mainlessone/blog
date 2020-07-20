import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[AUTH] login',
  LOGIN_SUCCESS = '[AUTH] login success',
  LOGIN_FAILURE = '[AUTH] login failure',

  CHECK_LOGIN = '[AUTH] check login',

  LOGOUT = '[AUTH] logout'
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

export class CheckLoginAction implements Action {
  readonly type = AuthActionTypes.CHECK_LOGIN;
}

export class LogOutAction implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions =

  | LogInAction
  | LogInSuccessAction
  | LogInFailureAction
  | CheckLoginAction
  | LogOutAction
