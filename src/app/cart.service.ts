import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {items} from './food.json'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  cartEvent =new  BehaviorSubject<any>([])
  constructor() { }
  addToCart(item:any){
    item.count = 1
    this.cartItems.push(item)
    this.cartEvent.next(this.cartItems)
  }
  decCartItem(item:any){
    // item.count--
    this.cartItems.map((el)=>{
      if(el.id === item.id){
        if(el.count)
        {el.count--}
      }
      else
        el
    })
    this.cartEvent.next(this.cartItems)
  }
  incCartItem(item:any){
     this.cartItems.map((el)=>{
      if(el.id === item.id){
        el.count++
      }
      else
        el
    })
    this.cartEvent.next(this.cartItems)
  }
  findProductDetailsById(id:any){
    return items.find((item)=>item.id ===id)
  }
  

}
