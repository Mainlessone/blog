import { ISignUpState } from "../models/signup.state.interface";
import { SignUpActions, SignUpActionTypes } from '../actions/signup.actions';

const initialState: ISignUpState = {
  isSignedUp: false,
  user: null,
  error: null
}

export const SignUpReducer = (state: ISignUpState = initialState, action: SignUpActions) => {
  switch (action.type) {
    case SignUpActionTypes.SIGNUP:
      return { ...state, isSignedUp: false, error: null };
    case SignUpActionTypes.SIGNUP_SUCCESS:
      return { ...state, isSignedUp: true, user: action.payload, error: null };
    case SignUpActionTypes.SIGNUP_FAILURE:
      return { ...state, isSignedUp: false, error: action.payload };
    default:
      return state;
  }
}
