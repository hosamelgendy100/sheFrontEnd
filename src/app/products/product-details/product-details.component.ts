import { AlertifyService } from './../../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productsFromDb = [];
  index = 4;
  relatedProducts = [];
  sizes = [32, 34, 36, 38, 40];

  myThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg';
  myFullresImage = 'https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg';

  slidesToShow() {
    // tslint:disable-next-line: prefer-for-of
    this.relatedProducts = [];
    for ( let i = this.index; i < this.index + 4; i++ ) {
      this.relatedProducts.push(this.productsFromDb[i]);
    }
  }

  constructor() {
   
  }

  ngOnInit() {
    for (let i = 50; i < 65; i++) {
      this.productsFromDb.push(`https://picsum.photos/id/${i}/600/900`);
    }

    this.slidesToShow();
  }

 
  forward() {
    this.index < this.productsFromDb.length - 3 ? this.index += 4 : this.index = this.index;
    console.log(this.index);
    this.slidesToShow();
  }

  backward() {
    this.index !== 0 ? this.index -= 4 : this.index = 0;
    console.log(this.index);
    this.slidesToShow();
  }

}
