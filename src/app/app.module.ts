import { MyMaterialModule } from "./material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectComponent } from "./project/project.component";
import { SkillsComponent } from "./skills/skills.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [PortfolioComponent, SkillsComponent, ProjectComponent, HeaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MyMaterialModule, FlexLayoutModule, HttpClientModule],
  providers: [],
  bootstrap: [PortfolioComponent]
})
export class AppModule {}
