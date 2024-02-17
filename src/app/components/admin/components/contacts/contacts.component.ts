import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../models/placeholderUser';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {

  personalList!: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.personalList = this.userService.getPersonalList();
  }

}
