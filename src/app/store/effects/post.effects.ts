import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { PostService } from 'src/app/services/post.service';
import { LoadPostsAction, PostActionTypes, LoadPostsSuccessAction, LoadPostsFailureAction, AddPostAction, AddPostSuccessAction, AddPostFailureAction } from '../actions/post.actions';
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
  )

  @Effect()
  addPost$: Observable<any> = this.actions$.pipe(
    ofType<AddPostAction>(PostActionTypes.ADD_POST),
    mergeMap((action) => {
      return this.postService.addPost(action.payload.createPostDto, action.payload.token).pipe(
        map(data => new AddPostSuccessAction(data)),
        catchError(error => of(new AddPostFailureAction(error)))
      )
    })
  )

  @Effect({ dispatch: false })
  addPostSuccess$: Observable<any> = this.actions$.pipe(
    ofType<AddPostSuccessAction>(PostActionTypes.ADD_POST_SUCCESS),
    tap(_ => this.router.navigate(['/feed']))
  )

  constructor(
    private readonly actions$: Actions,
    private readonly postService: PostService,
    private readonly router: Router
  ) { }
}
