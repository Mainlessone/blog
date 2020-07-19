import { IAuthState } from "../models/auth.state.interface";
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';


const initialState: IAuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
}

export const AuthReducer = (state: IAuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isAuthenticated: false, error: null };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state, isAuthenticated: true, token: action.payload.accessToken,
        error: null
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state, isAuthenticated: false, error: action.payload
      };
    case AuthActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
