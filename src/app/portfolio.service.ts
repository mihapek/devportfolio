import { Injectable } from "@angular/core";
import { Skill } from "./skills/skill.structure";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private skills: Skill[] = [];
  private others = [];
  private personOthers = [];

  public portfolio: any = null;
  messages = null;

  constructor(private http: HttpClient) {}

  public loadPortfolio(): Observable<any> {
    if (!this.portfolio) {
      return this.http.get("portfolio.json").pipe(
        mergeMap(data => {
          console.log("-=Loading Portfolio=-");
          this.portfolio = data;

          let skillMap = this.computeSkills();
          for (let skill in skillMap) {
            this.skills.push(skillMap[skill]);
          }

          for (let key in this.portfolio.others) {
            this.others.push({ key: key, value: this.portfolio.others[key] });
          }

          for (let key in this.portfolio.person.others) {
            this.personOthers.push({
              key: key,
              value: this.portfolio.person.others[key]
            });
          }

          return of(this.portfolio);
        })
      );
    } else {
      return of(this.portfolio);
    }
  }

  public getSkills() {
    return this.skills;
  }

  private computeSkills() {
    let skillMap: { [key: string]: Skill } = {};

    for (let project of this.portfolio.projects) {
      let skills: any[] = project.skills.slice();

      for (let skill of skills) {
        let skillType: boolean = typeof skill != "string";
        let name = skillType ? skill.name : skill;

        if (!skillType) {
          project.skills.splice(project.skills.indexOf(name), 1);
          project.skills.push(new Skill(name, 0, 0));
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

  public getMessages(): Observable<any> {
    if (!this.messages) {
      return this.http.get("messages.json").pipe(
        mergeMap(data => {
          this.messages = data;
          return of(this.messages);
        })
      );
    } else {
      return of(this.messages);
    }
  }
}
