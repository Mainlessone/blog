import { IAuthState } from "../models/auth.state.interface";
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';


const initialState: IAuthState = {
  isAuthenticated: false,
  token: null,
  uId: null,
  error: null,
}

export const AuthReducer = (state: IAuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isAuthenticated: false, error: null };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state, isAuthenticated: true, token: action.payload.token,
        uId: action.payload.uId, error: null
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state, isAuthenticated: false, error: action.payload
      };
    case AuthActionTypes.CHECK_LOGIN:
      return { ...state, isAuthenticated: false, loading: true };
    case AuthActionTypes.CHECK_LOGIN_SUCCESS:
      return { ...state, token: action.payload.token, uId: action.payload.uId, isAuthenticated: true, loading: false };
    case AuthActionTypes.CHECK_LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, loading: false };
    case AuthActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
