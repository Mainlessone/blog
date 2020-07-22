import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.interface';
import { LoadPostAction, DeletePostAction } from '../store/actions/post.actions';
import { IPost } from '../feed/models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  postId: string;
  userId: string;

  post: IPost;

  subscriptions$: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private store$: Store<AppState>, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.subscriptions$.add(
      this.activatedRoute.params.subscribe(params => this.postId = params['id'])
    );
    this.subscriptions$.add(
      this.postService.getPost(this.postId).subscribe(post => {
        localStorage.setItem('viewed-post', JSON.stringify(post));
        this.post = post;
      })
    );

    this.subscriptions$.add(
      this.store$.select(store => store.auth.uId).subscribe(uId => this.userId = uId)
    );

  }

  editPost(): void {
    this.router.navigate([`edit/${this.postId}`]);
  }

  deletePost(): void {
    this.store$.dispatch(new DeletePostAction(this.postId));
  }

  ngOnDestroy(): void {

    this.subscriptions$.unsubscribe();
  }

}
