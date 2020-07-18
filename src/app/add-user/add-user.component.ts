import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  roles = ['Admin User', 'Team Lead', 'Manager'];
  user = new User(
    1,
    'Google',
    'ABB-100',
    new Date('2019, 3, 20'),
    this.roles[0],
    9111122223,
    38000.249,
    4.2,
    'assets/images/andrew.jpg'
  );
  constructor() {}

  ngOnInit(): void {}

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.user = new User(null, '', '', null, '', null, null, null, '');
  }
}
