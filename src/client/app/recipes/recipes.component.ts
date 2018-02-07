import { Component, OnInit } from '@angular/core';
import { RecipeItem } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesService } from './../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  recipes: RecipeItem[];

  constructor(
    private readonly recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipesService.getRecipes()
      .then((recipes: RecipeItem[]) => this.recipes = recipes);
  }

  testApi() {
    const request: XMLHttpRequest = new XMLHttpRequest();

    request.onload = (e: Event) => {
      console.log(e);
    };

    request.open('GET', 'api/getStuff', true);
    request.send();
  }
}
