import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { PostService } from 'src/app/services/post.service';
import { LoadPostsAction, PostActionTypes, LoadPostsSuccessAction, LoadPostsFailureAction, AddPostAction, AddPostSuccessAction, AddPostFailureAction, LoadPostAction, LoadPostSuccessAction, LoadPostFailureAction, DeletePostAction, DeletePostFailureAction, DeletePostSuccessAction, EditPostAction, EditPostSuccessAction, EditPostFailureAction } from '../actions/post.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class PostEffects {
  @Effect()
  loadPosts$: Observable<any> = this.actions$.pipe(
    ofType<LoadPostsAction>(PostActionTypes.LOAD_POSTS),
    mergeMap(() => this.postService.getPosts().pipe(
      map(data => new LoadPostsSuccessAction(data)),
      catchError(error => of(new LoadPostsFailureAction(error)))
    ))
  );

  @Effect()
  loadPost$: Observable<any> = this.actions$.pipe(
    ofType<LoadPostAction>(PostActionTypes.LOAD_POST),
    mergeMap((action) => this.postService.getPost(action.payload).pipe(
      map(post => new LoadPostSuccessAction(post)),
      catchError(error => {
        this.router.navigate(['/feed']);
        return of(new LoadPostFailureAction(error));
      })
    )
    )
  );

  @Effect()
  addPost$: Observable<any> = this.actions$.pipe(
    ofType<AddPostAction>(PostActionTypes.ADD_POST),
    mergeMap(action => this.postService.addPost(action.payload).pipe(
      map(data => new AddPostSuccessAction(data)),
      catchError(error => of(new AddPostFailureAction(error)))
    ))
  );

  @Effect({ dispatch: false })
  addPostSuccess$: Observable<any> = this.actions$.pipe(
    ofType<AddPostSuccessAction>(PostActionTypes.ADD_POST_SUCCESS),
    tap(_ => this.router.navigate(['/feed']))
  );

  @Effect()
  editPost$: Observable<any> = this.actions$.pipe(
    ofType<EditPostAction>(PostActionTypes.EDIT_POST),
    mergeMap(action => this.postService.editPost(action.payload).pipe(
      map(editedPostDto => new EditPostSuccessAction(editedPostDto)),
      catchError(error => of(new EditPostFailureAction(error)))
    ))
  )

  @Effect({ dispatch: false })
  editPostSuccess$: Observable<any> = this.actions$.pipe(
    ofType<EditPostSuccessAction>(PostActionTypes.EDIT_POST_SUCCESS),
    tap(_ => this.router.navigate(['/feed']))
  )

  @Effect()
  deletePost$: Observable<any> = this.actions$.pipe(
    ofType<DeletePostAction>(PostActionTypes.DELETE_POST),
    mergeMap((action) => this.postService.deletePost(action.payload).pipe(
      map((res: any) => new DeletePostSuccessAction(res)),
      catchError(error => of(new DeletePostFailureAction(error)))
    ))
  )

  @Effect({ dispatch: false })
  deletePostSuccess$: Observable<any> = this.actions$.pipe(
    ofType<DeletePostSuccessAction>(PostActionTypes.DELETE_POST_SUCCESS),
    tap(_ => this.router.navigate(['/feed']))
  )

  constructor(
    private readonly actions$: Actions,
    private readonly postService: PostService,
    private readonly router: Router
  ) { }
}
