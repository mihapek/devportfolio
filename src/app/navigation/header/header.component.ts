import { OnDestroy } from '@angular/core';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentTheme = "nerd";
  themes: string[] = ["nerd", "playground"];

    constructor(private renderer: Renderer2) {
    this.changeTheme();
  }

  changeTheme() {
    const theme = this.currentTheme;
    this.renderer.removeClass(document.body, this.currentTheme);
    const index = (this.themes.indexOf(theme) + 1) % this.themes.length;

    this.currentTheme = this.themes[index];
    this.renderer.addClass(document.body, this.currentTheme);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, "nerd");
    this.renderer.removeClass(document.body, "classic");
  }

}
