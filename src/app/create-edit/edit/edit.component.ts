import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/feed/models/post.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.interface';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { EditPostAction } from 'src/app/store/actions/post.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editedPostDto: IPost = {
    author: '',
    photo: '',
    title: '',
    description: '',
    article: '',
    tag: ''
  }

  postId: string;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private store$: Store<AppState>) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.postId = params['id'])
    this.postService.getPost(this.postId).subscribe(post => this.editedPostDto = post);
  }

  editPost(): void {
    this.store$.dispatch(new EditPostAction({ editedPostDto: this.editedPostDto, _id: this.postId }));
  }

}
