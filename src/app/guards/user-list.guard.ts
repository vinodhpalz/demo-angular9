import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user-list/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserListGuard implements Resolve<any> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.getUsers();
  }
}
