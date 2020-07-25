import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceConverterPipe } from '../shared/space-converter.pipe';
import { StarComponent } from '../shared/star/star.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { UserListGuard } from '../guards/user-list.guard';
import { UserDetailGuard } from './user-detail/user-detail.guard';
import { AddUserComponent } from '../add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'user-list/:id',
    canActivate: [UserDetailGuard],
    component: UserDetailComponent,
  },
  { path: 'register-user', component: RegisterUserComponent },
];

@NgModule({
  declarations: [RegisterUserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {}
