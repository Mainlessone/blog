import { IPost } from 'src/app/feed/models/post.interface';

export interface IPostState {
  posts: IPost[],
  loading: boolean,
  error: Error
}
