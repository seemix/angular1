import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services/user.service";
import {IUser} from "../../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  ngOnInit(): void {
    this.userService.getAll().subscribe( value => this.users = value)
  }

  constructor(private userService: UserService) {
  }

}
