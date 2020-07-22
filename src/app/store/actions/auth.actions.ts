import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[AUTH] login',
  LOGIN_SUCCESS = '[AUTH] login success',
  LOGIN_FAILURE = '[AUTH] login failure',

  CHECK_LOGIN = '[AUTH] check login',
  CHECK_LOGIN_SUCCESS = '[AUTH] check login - user is logged in',
  CHECK_LOGIN_FAILURE = '[AUTH] check login - user is not logged in',

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

export class CheckLoginSuccessAction implements Action {
  readonly type = AuthActionTypes.CHECK_LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class CheckLoginFailureAction implements Action {
  readonly type = AuthActionTypes.CHECK_LOGIN_FAILURE;

  constructor(public error: Error) { }
}

export class LogOutAction implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions =

  | LogInAction
  | LogInSuccessAction
  | LogInFailureAction

  | CheckLoginAction
  | CheckLoginSuccessAction
  | CheckLoginFailureAction

  | LogOutAction
