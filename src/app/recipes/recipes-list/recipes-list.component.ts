import { Component, Input, OnInit } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Input() recipes: RecipeItem[];

  constructor() { }

  ngOnInit() {
  }
}
