import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { Ingredienttest } from "../shared/ingredienttest.model";
import { ShoppingListService } from "./shopping-list.service";
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredienttest[];
  private subscription: Subscription;

  constructor(private _slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._slService.getIngredients();
    this.subscription = this._slService.ingredientsChanged
              .subscribe(
                (ingredients: Ingredienttest[]) => {
                  this.ingredients = ingredients;
                }
              )
  }

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
