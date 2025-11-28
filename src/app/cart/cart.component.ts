import { Component } from '@angular/core';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any = []
  constructor(public cs: CartService) { 
    this.cs.cartEvent.subscribe((allcartitems)=>this.cartItems=allcartitems)
  }
  decItem(item:any){
    this.cs.decCartItem(item)
  }
  incItem(item:any){
       this.cs.incCartItem(item)

  }
  findTotal(){
    return this.cartItems.reduce((a:any,b:any)=>a+(b.count*b.price),0)
  }
}
