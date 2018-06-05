import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ID, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';

// modules
import { AppRoutingModule } from './app.routing.module';
// import { GraphqlModule } from './app.graphql.module';
import { GuardsModule } from './guards/guards.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { MaterialModule } from './material/material.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'nest-angular' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServicesModule,
    SharedModule,
    GuardsModule,
    // GraphqlModule,
    InterceptorsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';

    console.log(`Running ${platform} with appId=${appId}`);
  }
}
