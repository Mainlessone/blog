import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/models/app-state.interface';
import { Store } from '@ngrx/store';
import { IPost } from 'src/app/feed/models/post.interface';
import { AddPostAction } from 'src/app/store/actions/post.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createPostDto: IPost = {
    author: '',
    photo: '',
    title: '',
    description: '',
    article: '',
    tag: ''
  }

  token: string;

  constructor(private store$: Store<AppState>) { }

  ngOnInit(): void {
  }

  createPost(): void {
    this.store$.select(store => store.auth).subscribe(authStore => {
      this.createPostDto.author = authStore.uId;
      this.token = authStore.token;
    });
    this.store$.dispatch(new AddPostAction(this.createPostDto));
  }



}
