import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Project } from './project.structure';


@Component({
  selector: 'project',
  templateUrl: './project.component.html'
})

export class ProjectComponent {

	@Input() project: Project;


  constructor() { 
    console.log("Load ProjectComponent");
  }

  private getDuration(){
  	if(this.project.fromDate){
  		let fromDate = Date.parse(this.project.fromDate);
  		let toDate = Date.now();
  		if(this.project.toDate){
  			toDate = Date.parse(this.project.toDate);
  		} 
		let timeDiff = Math.abs(toDate - fromDate);
		let diffMonths = Math.ceil(timeDiff / (1000 * 3600 * 24 * 30)); 

	  	return this.formatDate(fromDate)  + " - " + (this.project.toDate ? this.formatDate(toDate) : "now" ) + " (" + diffMonths + " months)";
  	} else{
  		return "---";
  	}
  	
  }

  private formatDate(timems:number){
  	const date = new Date(timems);
  	return date.getFullYear() + '/' + (date.getMonth() + 1);
  }


}


