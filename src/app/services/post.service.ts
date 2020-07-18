import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../feed/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly url: string = 'http://localhost:3000/blog';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.url}/posts`);
  }

  getPost(_id: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.url}/post/${_id}`);
  }

  addPost(postDto: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${this.url}/post`, postDto);
  }

  editPost(_id: string, editedPostDto: IPost): Observable<IPost> {
    return this.http.put<IPost>(`${this.url}/post/${_id}`, editedPostDto);
  }

  deletePost(_id: string): Observable<IPost> {
    return this.http.delete<IPost>(`${this.url}/post/${_id}`);
  }


}
