import { Component, OnInit } from '@angular/core';
import { RecipeItem } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesService } from './../services/recipes.service';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  recipes: RecipeItem[];

  emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  email: string;
  password: string;

  constructor(
    private readonly recipesService: RecipesService,
    private readonly authService: AuthService
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

  signUp() {
    this.authService.signUp(this.email, this.password);
  }

  signIn() {
    this.authService.signIn(this.email, this.password);
  }

  getProtected() {
    this.authService.getProtected()
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
