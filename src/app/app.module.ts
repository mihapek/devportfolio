import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectComponent } from "./project/project.component";
import { SkillsComponent } from "./skills/skills.component";
import { LabelsComponent } from "./labels/labels.component";
import { MainSectionComponent } from "./main-section/main-section.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [PortfolioComponent, SkillsComponent, ProjectComponent, LabelsComponent, MainSectionComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class AppModule {}
