import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/components/ingredient/ingredient.component';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(
    private readonly shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.shoppingListService.getIngredients()
      .then((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });

    // this.shoppingListService.ingredientsChanged
    //   .subscribe((ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   });
  }

}
