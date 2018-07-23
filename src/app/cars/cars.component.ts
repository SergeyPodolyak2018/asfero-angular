import { Component} from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent{
	canAddCar = false;
	addCarStatus=false;
	inputText='';
	carName='';
	cars=['ford', 'Audi', 'BMW'];
	users=[{
        "_index": "asferro",
        "_type": "user",
        "_id": "M2MDuWQBK_DkwhF8uqOV",
        "_score": 0.18232156,
        "_source": {
          "name": "Her",
          "surname": "Hero2w",
          "birthday": "2000-10-15",
          "contact": "+380983343804",
          "email": "s.her@her.com",
          "last_modified_date": "2018-07-20"
        }
      },
      {
        "_index": "asferro",
        "_type": "user",
        "_id": "92cjvmQBQkNE0rGWjcLK",
        "_score": 0.18232156,
        "_source": {
          "name": "Her",
          "surname": "Hero22w",
          "birthday": "2000-10-15",
          "contact": "+380983343804",
          "email": "s.her@her.com",
          "last_modified_date": "2018-07-20"
        }
      },
      {
        "_index": "asferro",
        "_type": "user",
        "_id": "MmMDuWQBK_DkwhF8lqOM",
        "_score": 0.18232156,
        "_source": {
          "name": "Her",
          "surname": "Herow",
          "birthday": "2000-10-15",
          "contact": "+380983343804",
          "email": "s.her@her.com",
          "last_modified_date": "2018-07-20"
        }
      },
      {
        "_index": "asferro",
        "_type": "user",
        "_id": "NGMDuWQBK_DkwhF8zKNW",
        "_score": 0.18232156,
        "_source": {
          "name": "Her",
          "surname": "Hero22w",
          "birthday": "2000-10-15",
          "contact": "+380983343804",
          "email": "s.her@her.com",
          "last_modified_date": "2018-07-20"
        }
      }
    ];

	addCar(){
		
		if (this.carName.length>0){
			this.addCarStatus=true;
			this.cars.push(this.carName);
			this.carName='';	
		}else{			
			this.addCarStatus=false;
		}
	}
	onKeyUp(event){
		
		this.inputText=event.target.value;
	}
	constructor(){
		//setTimeout(()=>{
		//	this.canAddCar = true;
		//},4000);
	}

	dell(id){
		console.log(id);
	}
}
