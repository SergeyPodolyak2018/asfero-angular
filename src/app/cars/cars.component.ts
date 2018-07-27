import { Component, OnInit} from '@angular/core';
import { UsersService} from '../users.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{	  
	users=[];
  visibl={
    addUser:false,
    fixUser:false,
  };	

	constructor(private usersList:UsersService){}

	ngOnInit(){
    this.users=this.usersList.users;
    this.visibl=this.usersList.visibility;
    this.usersList.getUser();
  }	

	dellUser(id){
		this.usersList.dellUser(id);
	}

  AddUser(){
    if(this.visibl.addUser){
      this.visibl.addUser=false;
    }else{
      this.visibl.addUser=true;
    }   
  }

  fixUser(id){
    if(this.visibl.fixUser){
      this.visibl.fixUser=false;
    }else{
      this.visibl.fixUser=true;
      this.usersList.fillFormForFixeblUser(id);
    }
       
  }
}
