import { 
  Component, 
  OnInit,
  ElementRef,
  ViewChild
 } from '@angular/core';

 import { Ingredienttest } from "../../shared/ingredienttest.model";
 import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredienttest(ingName, ingAmount);
    this._shoppingListService.addIngredient(newIngredient);
  }

}
