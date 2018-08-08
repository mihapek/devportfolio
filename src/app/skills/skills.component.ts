import { Component, Input, Inject, ViewEncapsulation } from '@angular/core';
import { Project } from './../project/project.structure';

import { PortfolioService } from '../portfolio.service';


@Component({
  selector: 'skills',
  templateUrl: 'skills.component.html'



})
export class SkillsComponent {

  constructor(private portfolioService: PortfolioService) { 
    console.log("Load SkillsComponent");
  }

  icons = [
    {"to":6,"src":"assets/images/skills/junior.svg"},
    {"to":30,"src":"assets/images/skills/minior.svg"},
    {"to":9999,"src":"assets/images/skills/senior.svg"},
    
  ];

  private getIconPath(months:number){
    for(let item of this.icons){
      if(item.to > months){
        return item.src;
      }
    }
  }


}



