import { Injectable, OnInit } from "@angular/core";
import { Skill } from "./skills/skill.structure";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PortfolioService implements OnInit {
  private skills = {};
  private others = [];
  private personOthers = [];

  public portfolio: any = {};
  public skillTypes = ["skills"];

  constructor(private http: HttpClient) {
    this.http.get("portfolio.json").subscribe(
      data => {
        console.log("Load Portfolio:");
        this.portfolio = data;
        console.log(this.portfolio);

        for (let skillType of this.skillTypes) {
          let skillMap = this.computeSkills(skillType);
          let skillsArray: Array<Skill> = [];
          for (let skill in skillMap) {
            skillsArray.push(skillMap[skill]);
          }

          this.skills[skillType] = skillsArray;
        }

        for (let key in this.portfolio.others) {
          this.others.push({ key: key, value: this.portfolio.others[key] });
        }

        for (let key in this.portfolio.person.others) {
          this.personOthers.push({ key: key, value: this.portfolio.person.others[key] });
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit(): void {}

  public getSkills(skillType: string) {
    return this.skills[skillType];
  }

  private computeSkills(skillType: string) {
    let skillMap: { [key: string]: Skill } = {};

    for (let project of this.portfolio.projects) {
      for (let skill of project[skillType]) {
        let name = skill;
        if (skill.name) {
          name = skill.name;
        }
        if (!skillMap[name]) {
          skillMap[name] = new Skill(name, 0, 0);
        }
        skillMap[name].count++;
        skillMap[name].months += this.getProjectDurationInMonth(project);
        skillMap[name].lastJob = this.maxDate(skillMap[name].lastJob, project);
      }
    }
    return skillMap;
  }

  private getProjectDurationInMonth(project) {
    if (project.fromDate) {
      let fromDate = Date.parse(project.fromDate);
      let toDate = Date.now();
      if (project.toDate) {
        toDate = Date.parse(project.toDate);
      }
      let timeDiff = Math.abs(toDate - fromDate);
      return Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
    } else {
      return 0;
    }
  }

  private maxDate(lastDate: number, project) {
    let projectToDate: number = Date.now();
    if (!project.fromDate) {
      return lastDate;
    } else if (project.toDate) {
      projectToDate = Date.parse(project.toDate);
    }
    if (!lastDate || projectToDate > lastDate) {
      return projectToDate;
    }
    return lastDate;
  }
}
