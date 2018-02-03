import { NgModule } from '@angular/core';
import { RecipesService } from './recipes.service';
import { ShoppingListService } from './shopping-list.service';

@NgModule({
  providers: [RecipesService, ShoppingListService]
})
export class ServicesModule {}
