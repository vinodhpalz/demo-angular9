import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  pageTitle = 'Tech Injections';
  imgWidth = 100;
  imgMargin = 2;
  showImage: boolean = false;
  _searchFilter: string;
  filteredUsers: IUser[];
  users: IUser[];
  errorMessage: string;
  constructor(private userService: UserService) {}

  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value;
    this.filteredUsers = this.searchFilter
      ? this.performFilter(this.searchFilter)
      : this.users;
  }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter(
      (user: IUser) => user.userName.toLocaleLowerCase().indexOf(filterBy)! == 0
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: (err) => (this.errorMessage = err),
    });

    console.log(`${this.pageTitle} ngOnInit is triggered`);
  }

  onNotify(message: string): void {
    this.pageTitle = 'Users List: ' + message;
  }
}
