import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  showRecipes = true;
  showShoppingList = false;

  navigate(innerText: string): void {
    if (innerText === 'Recipe Book' || innerText === 'Recipes') {
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if (innerText === 'Shopping List') {
      this.showShoppingList = true;
      this.showRecipes = false;
    }
  }
}
