import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/components/ingredient/ingredient.component';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  private nameInput: HTMLInputElement;
  private amountInput: HTMLInputElement;

  constructor(
    private readonly shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.nameInput = this.name.nativeElement as HTMLInputElement;
    this.amountInput = this.amount.nativeElement as HTMLInputElement;
  }

  createIngredient(): void {
    const ingredient: Ingredient = new Ingredient(
      this.nameInput.value,
      +this.amountInput.value
    );

    this.shoppingListService.addIngredient(ingredient);
    this.clearFields();
  }

  clearFields(): void {
    this.nameInput.value = null;
    this.amountInput.value = null;
  }

}
