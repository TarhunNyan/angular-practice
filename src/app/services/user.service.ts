import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/placeholderUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPersonalList(): Observable<User[]> {
    // не забудь в App.module добавить HttpClientModule
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=5')
  }

  getPersonal(id: number): Observable<User> {
    // не забудь в App.module добавить HttpClientModule
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
