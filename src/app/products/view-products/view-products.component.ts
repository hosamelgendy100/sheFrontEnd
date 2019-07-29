import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products = [];
  constructor() { }

  ngOnInit() {
    for (let i = 110; i < 120; i++) {
      this.products.push(`https://picsum.photos/id/${i}/700/900`);
    }
  }

}
