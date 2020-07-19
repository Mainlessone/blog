import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './models/post.interface';
import { Store } from '@ngrx/store';
import { LoadPostsAction } from '../store/actions/post.actions';
import { AppState } from '../store/models/app-state.interface';

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

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.postItems$ = this.store$.select(store => store.post.posts);
    this.loading$ = this.store$.select(store => store.post.loading);
    this.error$ = this.store$.select(store => store.post.error);

    this.store$.dispatch(new LoadPostsAction());
  }

}
