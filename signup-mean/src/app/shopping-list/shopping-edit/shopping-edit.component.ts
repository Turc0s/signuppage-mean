import { 
  Component, 
  OnInit,
  ViewChild
 } from '@angular/core';

 import { Ingredienttest } from "../../shared/ingredienttest.model";
 import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild("f") shoppinglistForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredienttest;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this._shoppingListService.startedEditing
          .subscribe(
            (index: number) => {
              this.editedItemIndex = index;
              this.editMode = true;
              this.editedItem = this._shoppingListService.getIngredient(index);
              this.shoppinglistForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
              });
            }
          );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredienttest(value.name, value.amount);
    this._shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
