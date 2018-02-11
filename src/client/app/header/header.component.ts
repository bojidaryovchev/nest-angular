import { Component, OnInit } from '@angular/core';

interface ISection {
  title: string;
  link: string;
}

interface INav {
  sections: ISection[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav: INav = {
    sections: [
      {title: 'Recipes', link: 'recipes'},
      {title: 'Shopping List', link: 'shopping-list'}
    ]
  };

  constructor() { }

  ngOnInit() {
  }
}
