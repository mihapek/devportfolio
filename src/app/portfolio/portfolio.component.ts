import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

import { PortfolioService } from '../portfolio.service';
import { Observable, of, BehaviorSubject, from } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  currentTheme: string = 'nerd';
  themes: string[] = ['nerd', 'playground'];


  constructor(public portfolioService: PortfolioService,
    private renderer: Renderer2) { 
      this.changeTheme(this.currentTheme);
    }

    changeTheme(theme: string){
      this.renderer.removeClass(document.body,this.currentTheme);
      this.currentTheme = theme;
      this.renderer.addClass(document.body,this.currentTheme);
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body,'nerd');
    this.renderer.removeClass(document.body,'classic');
  }

}
