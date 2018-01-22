import { Component, Input, OnInit } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item.component';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Input() recipes: RecipeItem[];

  constructor(
    private readonly recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: RecipeItem) {
    this.recipesService.recipeSelected.emit(recipe);
  }
}
