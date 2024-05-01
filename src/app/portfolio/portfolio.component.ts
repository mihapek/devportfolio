import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../portfolio.service";
import { Skill } from "../skills/skill.structure";
import { Project } from "../project/project.structure";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html"
})
export class PortfolioComponent implements OnInit {
  filteredProjects: Project[] = [];
  messages = {};

  constructor(public portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.loadPortfolio().subscribe(portfolio => (this.filteredProjects = this.portfolioService.portfolio.projects));
    this.portfolioService.getMessages().subscribe(messages => (this.messages = messages));
  }

  filterProjects(activatedSkills: Skill[]) {
    if (!activatedSkills || activatedSkills.length == 0) {
      this.filteredProjects = this.portfolioService.portfolio.projects;
    } else {
      let allProjects = this.portfolioService.portfolio.projects;

      this.filteredProjects = [];

      allProjects.forEach((project: Project) => {
        if (this.containsAllSkills(project, activatedSkills)) {
          this.filteredProjects.push(project);
        }
      });
    }
  }

  private containsAllSkills(project: Project, activatedSkills: Skill[]): boolean {
    let thisSkillNames = project.skills.map(lSkill => lSkill.name);

    let foundAllSkills = true;
    activatedSkills.forEach(skill => {
      if (thisSkillNames.indexOf(skill.name) < 0) {
        foundAllSkills = false;
      }
    });
    return foundAllSkills;
  }
}
