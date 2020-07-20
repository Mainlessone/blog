import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../feed/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  signIn(signInDto): Observable<any> {
    return this.http.post(`${this.url}/signIn`, signInDto);
  }

  singUp(userDto: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}/signUp`, userDto);
  }

  checkTokenInDb(token: string): Observable<any> {
    return this.http.post(`${this.url}/checkToken`, { token });
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  logOut(): void {
    localStorage.removeItem('token');
  }



}
