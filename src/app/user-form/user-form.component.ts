import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
	name='';
	soname='';
	birthdate='';
	contact='';

  constructor(private service:UsersService) { }

  ngOnInit() {
  }

	addUser(){		
		console.log(this.name);
		console.log(this.soname);
		console.log(this.birthdate);
		console.log(this.contact);
		this.service.addUser(this.name,this.soname,this.birthdate,this.contact);
		this.name='';
		this.soname='';
		this.birthdate='';
		this.contact='';
	}

	


}
