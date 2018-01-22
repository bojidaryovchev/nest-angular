import { Component, OnInit } from '@angular/core';
import { RecipeItem } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  recipes: RecipeItem[];
  currentRecipe: RecipeItem;
  recipeSelected = false;

  constructor(
    private readonly recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipesService.getRecipes()
      .then((recipes: RecipeItem[]) => this.recipes = recipes);

    this.recipesService.recipeSelected
      .subscribe((recipe: RecipeItem) => {
        this.currentRecipe = recipe;
        this.recipeSelected = true;
      });
  }
}
