import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  // signIn(): Observable<any> {

  // }
}
