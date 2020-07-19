import { IUser } from 'src/app/feed/models/user.interface';

export interface ISignUpState {
  isSignedUp: boolean;
  user: IUser | null;
  error: Error | null;
}
