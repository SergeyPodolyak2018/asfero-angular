//import { Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class UsersService {
	
	users=[];
	bufFixUser={
		id:'',
		name:'',
		surname:'',
		birthday:'',
		contact:'',
		email:'',
    };
    visibility={
    	addUser:false,
    	fixUser:false,
    }

    constructor(private HttpClient:HttpClient){}
    
    ngOnInit(): void{	
		
	}
    

    getUser(){    	
    	this.HttpClient.get('/serchOll/').subscribe(data => {    		
			let temp=data['hits'];
			let remuved=this.users.splice(0, this.users.length);    			
			for(let i in temp){				
				this.users.push(temp[i]);
			}			
		});
    }

    fillFormForFixeblUser(id){    	
    	this.bufFixUser.id=id;
    	let tempIndex=getIndex(this.users,id);
    	let tempObject=Object.assign({},this.users[tempIndex]['_source']);    	
    	for(let i in tempObject){    					
			if(this.bufFixUser[i]!==undefined){
				console.log(i);				
				this.bufFixUser[i]=tempObject[i];				
			}
		}
    }

		

    addUser(userFile){
    	let userStructura={
	        _index: "asferro",
	        _type: "user",
	        _id: "",
	        _score: 0.18232156,
	        _source: {
	          name: "",
	          surname: "",
	          birthday: "",
	          contact: "",
	          email: "",
	          last_modified_date: ""
	      	}
        };
    	this.HttpClient.post('/addUser/',userFile).subscribe(data => {    		
			if(data['result']=='created'){ 
				console.log('created');
				userStructura._id=data['_id'];
				for(let i in userFile){
					userStructura._source[i]=userFile[i];
				}						
				this.users.push(userStructura);
				this.visibility.addUser=false;

    		}else{
    			console.log('error not created');
    		}		
		});
    }

	dellUser(id){
		let tempId=id;    	
    	this.HttpClient.delete('/delleteById/?id='+tempId).subscribe(data => {	
    		if(data['result']=='deleted'){    			
    			let notEqualElement=this.users.filter(x => x['_id'] !== data['_id']);
    			let remuved=this.users.splice(0, this.users.length);
    			this.users.push.apply( this.users, notEqualElement );
    		}else{
    			console.log(data);
    		}
		});
	}

	 fixUser(userTempObject){    	
    	this.HttpClient.put('/fixUser/',userTempObject).subscribe(data => {     				
			if(data['result']=='updated'){ 				
				let tempIndex=getIndex(this.users,userTempObject.id);
				let tempObject=Object.assign({},this.bufFixUser);				
				for(let i in this.users[tempIndex]['_source']){
					if(tempObject[i]!==undefined){						
						this.users[tempIndex]['_source'][i]=tempObject[i];
						this.bufFixUser[i]='';
					}
				}				
				this.visibility.fixUser=false;
			}else{
				console.log('error not updated');
			}		
		});
    }
}



function getIndex(arr, value) {
	let index;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]['_id'] === value) {
            index=i;
            break;
        }
    }
    return index;
}