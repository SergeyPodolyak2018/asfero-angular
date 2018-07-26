import { Component, OnInit} from '@angular/core';
import { UsersService} from '../users.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{	  
	users=[];
	addUserForm=false;  

	constructor(private usersList:UsersService){}

	ngOnInit(){
    this.users=this.usersList.users;
    this.usersList.getUser();
  }	

	dellUser(id){
		this.usersList.dellUser(id);
	}

  AddUser(){
    if(this.addUserForm){
      this.addUserForm=false;
    }else{
      this.addUserForm=true;
    }   
  }
}
