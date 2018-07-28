import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
	user={
		name:'',
		surname:'',
		birthday:'',
		contact:'',
		email:'',
	}

  constructor(private service:UsersService) { }

  ngOnInit() {
  }

	addUser(){
		this.service.addUser(Object.assign({},this.user));
		for(let i in this.user){
			this.user[i]='';
		}
	}
}
