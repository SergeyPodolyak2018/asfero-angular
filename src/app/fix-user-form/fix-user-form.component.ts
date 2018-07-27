import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
@Component({
  selector: 'app-fix-user-form',
  templateUrl: './fix-user-form.component.html',
  styleUrls: ['./fix-user-form.component.css']
})
export class FixUserFormComponent implements OnInit {
	fixUser={
		id:'',
		name:'',
		surname:'',
		birthday:'',
		contact:'',
		email:'',
    };

  constructor(private service:UsersService) {}

  ngOnInit() {
  	this.fixUser=this.service.bufFixUser;
  }

	sendFixUser(){
		this.service.fixUser(Object.assign({},this.fixUser));		
	}

}
