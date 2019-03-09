import { MyMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { LabelsComponent } from './labels/labels.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [PortfolioComponent, SkillsComponent, ProjectComponent, LabelsComponent, MainSectionComponent, HeaderComponent],
  imports: [BrowserModule,
            NgbModule.forRoot(),
            BrowserAnimationsModule,
            MyMaterialModule,
            FlexLayoutModule],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class AppModule {}
