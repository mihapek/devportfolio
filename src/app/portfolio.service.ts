import { Injectable } from "@angular/core";
import { Skill } from "./skills/skill.structure";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private skills = {};
  private others = [];
  private personOthers = [];

  public skillTypes = ["languages", "frameworks", "tools"];

  constructor() {
    console.log("Load PortfolioService");

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
  }

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

  public portfolio = {
    person: {
      name: "Alan Greenberg",
      foto: "assets/images/avatar/avatar-white.png",
      motto: "Unus pro omnibus, omnes pro uno",
      others: {
        dob: "1972-02-30 in Santiago de Cuba",
        "civil status": "single",
        languages: "English, Spanish, Chinese"
      }
    },
    projects: [
      {
        name: "One project that I was done",
        description:
          "Lorem <b>ipsum</b> dolor <i>sit amet</i>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        fromDate: "2017-02-01",
        toDate: "2018-04-15",
        languages: [{ name: "java", version: "1.8" }, "html", "sql"],
        frameworks: ["spring", { name: "spring boot", version: "1" }],
        tools: ["eclipse", "dbeaver", "jira", "bitbucket", "git", "jenkins", "mvn", "mysql"]
      },
      {
        name: "Second project that I was done too",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        fromDate: "2018-03-01",
        toDate: "2018-03-31",
        languages: ["java", "html", "sql"],
        frameworks: ["spring"],
        tools: ["eclipse", "dbeaver", "svn", "jenkins", "ant", "oracle"]
      },
      {
        name: "33333 project that I was done too",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        fromDate: "2011-11-01",
        toDate: "2017-01-31",
        languages: [{ name: "java", version: "1.6" }, "groovy"],
        frameworks: ["struts"],
        tools: ["eclipse", "svn", "jenkins", "gradle", "oracle"]
      }
    ],
    others: {
      Hobby: "<ul><li>First hobby</li><li>Second hobby</li></ul>",
      Certificates: "<ul><li>First certificate</li><li>Second certificate</li></ul>"
    },
    copyright: "Greenberg 2018"
  };
}
