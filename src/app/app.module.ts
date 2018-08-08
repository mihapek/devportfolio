import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { LabelsComponent } from './labels/labels.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    SkillsComponent,
    ProjectComponent,
    LabelsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class AppModule { }
