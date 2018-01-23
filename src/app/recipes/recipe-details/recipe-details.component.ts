import { Component, OnInit } from '@angular/core';
import { RecipeItem } from '../recipes-list/recipe-item/recipe-item.component';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeItem;

  constructor(
    private readonly recipesService: RecipesService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipesService.getRecipe(+params.id);
    });
  }

  onAddToShoppingList(): void {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
