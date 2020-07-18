import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user-list/:id', component: UserDetailComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
