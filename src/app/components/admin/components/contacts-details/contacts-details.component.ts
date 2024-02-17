import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, Observable, take, tap } from 'rxjs';
import { User } from '../../../../models/placeholderUser';
import { UserService } from '../../../../services/user.service';

@Component({
             selector: 'app-contacts-details',
             templateUrl: './contacts-details.component.html',
             styleUrl: './contacts-details.component.css',
           })
export class ContactsDetailsComponent {

  user!: Observable<User>;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {
    // получаем данные на прямую
    // this.activateRoute.params.pipe(
    //   map(params => params?.['id']),
    //   filter(id => id != null && id!=""),
    //   take(1)
    // ).subscribe(id => this.setUser(userService.getPersonal(id)))

    // получаем данные через resolver
    this.user = this.activateRoute.data.pipe(map(data => data?.['user']));
  }

  private setUser(user: Observable<User>) {
    this.user = user;
  }
}
