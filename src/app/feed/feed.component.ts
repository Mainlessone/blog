import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './models/post.interface';
import { Store, select } from '@ngrx/store';
import { IPostState } from '../store/models/post-state.interface';
import { LoadPostsAction } from '../store/actions/post.actions';
import { AppPostState } from '../store/models/app-post-state.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  postItems$: Observable<IPost[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  breakpoint: number = 2;

  constructor(private store$: Store<AppPostState>) {
  }

  ngOnInit(): void {
    this.postItems$ = this.store$.select(store => store.post.posts);
    this.loading$ = this.store$.select(store => store.post.loading);
    this.error$ = this.store$.select(store => store.post.error);

    this.store$.dispatch(new LoadPostsAction());
  }

}
