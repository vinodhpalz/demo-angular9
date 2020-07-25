import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceConverterPipe } from './shared/space-converter.pipe';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { AdminModule } from './admin/admin.module';
import { UserListModule } from './user-list/user-list.module';

@NgModule({
  declarations: [AppComponent, AddUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
