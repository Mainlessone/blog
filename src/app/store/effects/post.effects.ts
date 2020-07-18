import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { PostService } from 'src/app/services/post.service';
import { LoadPostsAction, PostActionTypes, LoadPostsSuccessAction, LoadPostsFailureAction } from '../actions/post.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class PostEffects {
  @Effect() loadPosts$ = this.actions$.pipe(
    ofType<LoadPostsAction>(PostActionTypes.LOAD_POSTS),
    mergeMap(() => this.postService.getPosts().pipe(
      map(data => new LoadPostsSuccessAction(data)),
      catchError(error => of(new LoadPostsFailureAction(error)))
    ))
  )

  constructor(private actions$: Actions, private postService: PostService) { }
}
