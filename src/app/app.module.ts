import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersService} from './users.service';
import { FixUserFormComponent } from './fix-user-form/fix-user-form.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,    
    UserFormComponent,
    FixUserFormComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
