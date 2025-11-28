import { CurrencyPipe } from '@angular/common';
import { Component,input } from '@angular/core';
import {CartService} from '../cart.service'
import {items} from '../food.json'
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [RouterLink]
})
export class ProductComponent {
 item = input<any>()
 items = items;
 constructor(public cs:CartService){}
 addItemToCart(item:any){
  this.cs.addToCart(item)
 }

}
