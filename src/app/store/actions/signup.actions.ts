import { Action } from '@ngrx/store';

export enum SignUpActionTypes {
  SIGNUP = '[SIGNUP] signup',
  SIGNUP_SUCCESS = '[SIGNUP] signup success',
  SIGNUP_FAILURE = '[SIGNUP] signup failure'
}

export class SignUpAction implements Action {
  readonly type = SignUpActionTypes.SIGNUP;

  constructor(public payload: any) { }
}

export class SignUpSuccessAction implements Action {
  readonly type = SignUpActionTypes.SIGNUP_SUCCESS;

  constructor(public payload: any) { }
}

export class SignUpFailureAction implements Action {
  readonly type = SignUpActionTypes.SIGNUP_FAILURE;

  constructor(public payload: any) { }
}


export type SignUpActions =

  | SignUpAction
  | SignUpSuccessAction
  | SignUpFailureAction
