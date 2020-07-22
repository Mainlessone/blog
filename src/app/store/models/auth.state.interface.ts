import { IPost } from 'src/app/feed/models/post.interface';

export interface IAuthState {
  isAuthenticated: boolean;
  token: string | null;
  uId: string | null;
  error: Error | null
}
