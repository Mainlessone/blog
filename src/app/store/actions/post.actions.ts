import { Action } from '@ngrx/store';
import { IPost } from 'src/app/feed/models/post.interface';


export enum PostActionTypes {
  LOAD_POSTS = '[POST] load posts',
  LOAD_POSTS_SUCCESS = '[POST] load posts success',
  LOAD_POSTS_FAILURE = '[POST] load posts failure',

  LOAD_POST = '[POST] load post',
  LOAD_POST_SUCCESS = '[POST] load post success',
  LOAD_POST_FAILURE = '[POST] load post failure',

  ADD_POST = '[POST] add post',
  ADD_POST_SUCCESS = '[POST] add post success',
  ADD_POST_FAILURE = '[POST] add post failure',

  EDIT_POST = '[POST] edit post',
  EDIT_POST_SUCCESS = '[POST] edit post success',
  EDIT_POST_FAILURE = '[POST] edit post failure',

  DELETE_POST = '[POST] delete post',
  DELETE_POST_SUCCESS = '[POST] delete post success',
  DELETE_POST_FAILURE = '[POST] delete post failure'
}

/// Load Posts

export class LoadPostsAction implements Action {
  readonly type = PostActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccessAction implements Action {
  readonly type = PostActionTypes.LOAD_POSTS_SUCCESS;

  constructor(public payload: IPost[]) { }
}

export class LoadPostsFailureAction implements Action {
  readonly type = PostActionTypes.LOAD_POSTS_FAILURE;

  constructor(public payload: string) { }
}

/// Load Post

export class LoadPostAction implements Action {
  readonly type = PostActionTypes.LOAD_POST;

  constructor(public payload: string) { }
}

export class LoadPostSuccessAction implements Action {
  readonly type = PostActionTypes.LOAD_POST_SUCCESS;

  constructor(public payload: IPost) { }
}

export class LoadPostFailureAction implements Action {
  readonly type = PostActionTypes.LOAD_POST_FAILURE;

  constructor(public payload: Error) { }
}

/// Add Post

export class AddPostAction implements Action {
  readonly type = PostActionTypes.ADD_POST;

  constructor(public payload: any) { }
}

export class AddPostSuccessAction implements Action {
  readonly type = PostActionTypes.ADD_POST_SUCCESS;

  constructor(public payload: any) { console.log(this.payload) }

}

export class AddPostFailureAction implements Action {
  readonly type = PostActionTypes.ADD_POST_FAILURE;

  constructor(public payload: Error) { }
}

/// Edit Post


export class EditPostAction implements Action {
  readonly type = PostActionTypes.EDIT_POST;

  constructor(public payload: string) { }
}

export class EditPostSuccessAction implements Action {
  readonly type = PostActionTypes.EDIT_POST_SUCCESS;

  constructor(public payload: IPost, public _id: string) { }
}

export class EditPostFailureAction implements Action {
  readonly type = PostActionTypes.EDIT_POST_FAILURE;

  constructor(public payload: Error) { }
}

/// Delete Post


export class DeletePostAction implements Action {
  readonly type = PostActionTypes.DELETE_POST;

  constructor(public payload: string) { }
}

export class DeletePostSuccessAction implements Action {
  readonly type = PostActionTypes.DELETE_POST_SUCCESS;

  constructor(public payload: string) { }
}

export class DeletePostFailureAction implements Action {
  readonly type = PostActionTypes.DELETE_POST_FAILURE;

  constructor(public payload: Error) { }
}


export type PostActions =

  | LoadPostsAction
  | LoadPostsSuccessAction
  | LoadPostsFailureAction

  | LoadPostAction
  | LoadPostSuccessAction
  | LoadPostFailureAction

  | AddPostAction
  | AddPostSuccessAction
  | AddPostFailureAction

  | EditPostAction
  | EditPostSuccessAction
  | EditPostFailureAction

  | DeletePostAction
  | DeletePostSuccessAction
  | DeletePostFailureAction



