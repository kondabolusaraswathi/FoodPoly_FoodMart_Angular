import { Component } from '@angular/core';
import {CartService} from '../cart.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product:any
  constructor(public ar:ActivatedRoute ,public cs:CartService) {
    this.ar.params.subscribe(({id})=>
      {this.product = this.cs.findProductDetailsById(id)})
  }
  openProduct(){

  }

}
