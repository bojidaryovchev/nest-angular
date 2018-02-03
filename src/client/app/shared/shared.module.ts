import { NgModule } from '@angular/core';
import { DropdownDirective } from './directives/dropdown.directive';
import { IngredientComponent } from './components/ingredient/ingredient.component';

@NgModule({
  declarations: [DropdownDirective, IngredientComponent],
  exports: [DropdownDirective, IngredientComponent]
})
export class SharedModule {}
