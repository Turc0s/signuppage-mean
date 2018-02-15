import { Injectable } from '@angular/core';
import { Ingredienttest } from "../shared/ingredienttest.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredienttest[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredienttest[] = [
    new Ingredienttest("Apple", 5),
    new Ingredienttest("Tomato", 8)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredienttest) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredienttest[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  constructor() { }

}
