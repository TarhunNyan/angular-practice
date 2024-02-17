import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localStorage: Storage | undefined;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    this.localStorage = document.defaultView?.localStorage;
  }

  users: User[] = [
    new User('vasia@mail.com', '123qweasd', 'vasia'),
    new User('test@test', '123qweasd', 'The test!')
  ];

  setToken(token: string) {
    this.localStorage?.setItem('token', token);
  }

  getToken(): string | null | undefined {
    return this.localStorage?.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }

  logout(): void {
    this.localStorage?.removeItem('token');
    // this.router.navigate(['login']);
  }

  public login(userInfo: {email: string, password: string}): Observable<string | boolean>{
    for(let user of this.users) {
      if(user.login === userInfo.email && user.password === userInfo.password) {
        this.setToken(user.token);
        return of(true);
      }
    }
    this.localStorage?.removeItem('token');
    return throwError(() => new Error('Failed Login'));
  }
}
