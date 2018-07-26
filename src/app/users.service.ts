//import { Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class UsersService {
	
	 users=[//{
 //        "_index": "asferro",
 //        "_type": "user",
 //        "_id": "M2MDuWQBK_DkwhF8uqOV",
 //        "_score": 0.18232156,
 //        "_source": {
 //          "name": "Her",
 //          "surname": "Hero2w",
 //          "birthday": "2000-10-15",
 //          "contact": "+380983343804",
 //          "email": "s.her@her.com",
 //          "last_modified_date": "2018-07-20"
 //        }
 //      },
 //      {
 //        "_index": "asferro",
 //        "_type": "user",
 //        "_id": "92cjvmQBQkNE0rGWjcLK",
 //        "_score": 0.18232156,
 //        "_source": {
 //          "name": "Her",
 //          "surname": "Hero22w",
 //          "birthday": "2000-10-15",
 //          "contact": "+380983343804",
 //          "email": "s.her@her.com",
 //          "last_modified_date": "2018-07-20"
 //        }
 //      },
 //      {
 //        "_index": "asferro",
 //        "_type": "user",
 //        "_id": "MmMDuWQBK_DkwhF8lqOM",
 //        "_score": 0.18232156,
 //        "_source": {
 //          "name": "Her",
 //          "surname": "Herow",
 //          "birthday": "2000-10-15",
 //          "contact": "+380983343804",
 //          "email": "s.her@her.com",
 //          "last_modified_date": "2018-07-20"
 //        }
 //      },
 //      {
 //        "_index": "asferro",
 //        "_type": "user",
 //        "_id": "NGMDuWQBK_DkwhF8zKNW",
 //        "_score": 0.18232156,
 //        "_source": {
 //          "name": "Her",
 //          "surname": "Hero22w",
 //          "birthday": "2000-10-15",
 //          "contact": "+380983343804",
 //          "email": "s.her@her.com",
 //          "last_modified_date": "2018-07-20"
 //        }
 //      }
    ];

    constructor(private HttpClient:HttpClient){}
    
    ngOnInit(): void{	
		// this.HttpClient.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {		
		// 	console.log(data);		
		// });
		//this.getUser();
	}
    

    getUser(){    	
    	this.HttpClient.get('/serchOll/').subscribe(data => {
			let temp=data['hits'];
			for(let i in temp){				
				this.users.push(temp[i]);
			}			
		});
    }

		

    addUser(name, surname, birthday, contact){    	
    	this.HttpClient.post('/addUser/',{
    		name:name,
    		surname:surname,
    		birthday:birthday,
    		contact:contact,
    	}).subscribe(data => {		
			console.log(data);		
		});
    }

	dellUser(id){    	
	    	this.HttpClient.delete('/delleteById/?id='+id).subscribe(data => {		
				console.log(data);		
			});
	    }


}