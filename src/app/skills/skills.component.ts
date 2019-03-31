import { Component, Input, Inject, ViewEncapsulation, OnInit, Output, EventEmitter } from "@angular/core";
import { Project } from "./../project/project.structure";

import { PortfolioService } from "../portfolio.service";
import { Skill } from "./skill.structure";

@Component({
  selector: "skills",
  templateUrl: "skills.component.html"
})
export class SkillsComponent implements OnInit {
  activatedSkills: Skill[] = [];
  skills: Skill[] = [];

  @Output() filteredSkills: EventEmitter<Skill[]> = new EventEmitter();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }

  icons = [
    { to: 6, src: "assets/images/skills/junior.svg" },
    { to: 30, src: "assets/images/skills/minior.svg" },
    { to: 9999, src: "assets/images/skills/senior.svg" }
  ];

  private getIconPath(months: number) {
    for (let item of this.icons) {
      if (item.to > months) {
        return item.src;
      }
    }
  }

  getSkills() {
    return this.skills;
  }

  addSkillToFilter(skill: Skill) {
    this.activatedSkills.push(skill);
    skill.activated = true;
    this.emitSkills();
  }

  removeSkillFromFilter(skill: Skill) {
    this.activatedSkills.splice(this.activatedSkills.indexOf(skill), 1);
    skill.activated = false;
    this.emitSkills();
  }

  deactivateAllSkills() {
    this.activatedSkills.forEach(skill => (skill.activated = false));
    this.activatedSkills = [];
    this.emitSkills();
  }

  private emitSkills() {
    this.filteredSkills.emit(this.activatedSkills);
  }
}
