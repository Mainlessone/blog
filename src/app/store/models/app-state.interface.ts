import { IPostState } from './post-state.interface';
import { IAuthState } from './auth.state.interface';

export interface AppState {
  readonly post: IPostState;
  readonly auth: IAuthState;
}
