import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "labels",
  template: `
    <span class="badge badge-success dlabel" *ngFor="let value of values"
      >{{ printLabel(value) }}
      <span class="badge badge-light" *ngIf="value.version">{{ value.version }}</span>
    </span>
  `
})
export class LabelsComponent {
  @Input() values;

  constructor() {}

  private printLabel(value) {
    return value.name ? value.name : value;
  }
}
