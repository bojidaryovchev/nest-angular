import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailsComponent,
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    // children: [
    //   {
    //     path: ''
    //   }
    // ]
  },
  {
    path: '**',
    redirectTo: 'recipes'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
