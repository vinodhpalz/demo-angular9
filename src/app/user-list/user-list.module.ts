import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListGuard } from 'src/app/guards/user-list.guard';
import { UserListComponent } from './user-list.component';
import { SpaceConverterPipe } from 'src/app/shared/space-converter.pipe';
import { StarComponent } from 'src/app/shared/star/star.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'user-list',
    resolve: {
      data: UserListGuard,
    },
    component: UserListComponent,
  },
];
@NgModule({
  declarations: [UserListComponent, SpaceConverterPipe, StarComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
})
export class UserListModule {}
