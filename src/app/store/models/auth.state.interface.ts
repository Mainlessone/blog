import { IUser } from 'src/app/feed/models/user.interface';

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser
}
