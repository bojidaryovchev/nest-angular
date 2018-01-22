import { Component, Input, OnInit } from '@angular/core';
import { RecipeItem } from '../recipes-list/recipe-item/recipe-item.component';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: RecipeItem;

  constructor(
    private readonly recipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  private onAddToShoppingList(): void {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
