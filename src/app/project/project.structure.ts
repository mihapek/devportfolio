import { Skill } from "../skills/skill.structure";

export class Project {
  name: string;
  description: string;
  fromDate: string;
  toDate: string;

  skills: Skill[];
}
