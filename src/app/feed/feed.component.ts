import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './models/post.interface';
import { Store } from '@ngrx/store';
import { LoadPostsAction } from '../store/actions/post.actions';
import { AppState } from '../store/models/app-state.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  postItems$: Observable<IPost[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  lastPostThatUserSaw: IPost = JSON.parse(localStorage.getItem('viewed-post'));

  breakpoint: number = 2;
  feedsCols: number = 9;
  feedRowHeight: number = 80;

  constructor(private store$: Store<AppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
    this.feedsCols = (window.innerWidth <= 500) ? 12 : 9;
    this.feedRowHeight = (window.innerWidth <= 1215) ? 65 : 80;

    this.postItems$ = this.store$.select(store => store.post.posts);
    this.loading$ = this.store$.select(store => store.post.loading);
    this.error$ = this.store$.select(store => store.post.error);

    this.store$.dispatch(new LoadPostsAction());
  }

  onResize(): void {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
    this.feedsCols = (window.innerWidth <= 500) ? 12 : 9;
    this.feedRowHeight = (window.innerWidth <= 1210) ? 65 : 80;
  }

  continueReading(_id: string): void {
    this.router.navigate([`/post/${_id}`]);
  }

}
