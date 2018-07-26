import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersService} from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    UserFormComponent
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
