import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { UserDetailGuard } from './admin/user-detail/user-detail.guard';
import { UserListGuard } from './guards/user-list.guard';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },

  {
    path: 'user',
    loadChildren: () =>
      import('./user-list/user-list.module').then((m) => m.UserListModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', redirectTo: 'add-user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
