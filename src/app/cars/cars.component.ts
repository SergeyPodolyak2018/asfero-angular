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
	cars=['ford', 'Audi', 'BMW']

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
}
