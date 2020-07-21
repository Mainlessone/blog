import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../feed/models/post.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly url: string = 'http://localhost:3000/blog';

  token$: string;

  constructor(private http: HttpClient, private store$: Store<AppState>) {
    this.store$.select(store => store.auth.token).subscribe(t => this.token$ = t);
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.url}/posts`);
  }

  getPost(_id: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.url}/post/${_id}`);
  }

  addPost(postDto: IPost): Observable<IPost> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.token$}`);
    return this.http.post<IPost>(`${this.url}/post`, postDto, {
      headers: myHeaders
    });
  }

  editPost(payload: any): Observable<IPost> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.token$}`);
    return this.http.put<IPost>(`${this.url}/post/${payload._id}`, payload.editedPostDto, {
      headers: myHeaders
    });
  }

  deletePost(_id: string): Observable<IPost> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.token$}`);
    return this.http.delete<IPost>(`${this.url}/post/${_id}`, {
      headers: myHeaders
    });
  }


}
