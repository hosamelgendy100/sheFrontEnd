import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartItems = [];
  relatedProducts = [];
  constructor() { }

  ngOnInit() {
    for (let i = 30; i < 33; i++) {
      this.cartItems.push(`https://picsum.photos/id/${i}/400/600`);
    }

    for (let i = 20; i < 24; i++) {
      this.relatedProducts.push(`https://picsum.photos/id/${i}/400/600`);
    }
  }

}
