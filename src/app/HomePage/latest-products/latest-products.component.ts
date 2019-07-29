import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {
  slides = [];
  index = 4;
  images = [];

  slidesToShow() {
    // tslint:disable-next-line: prefer-for-of
    this.images = [];
    for ( let i = this.index; i < this.index + 4; i++ ) {
      this.images.push(this.slides[i]);
    }
  }

  constructor() {
  }

  ngOnInit() {
    for (let i = 50; i < 65; i++) {
      this.slides.push(`https://picsum.photos/id/${i}/600/900`);
    }

    this.slidesToShow();
  }

 
  forward() {
    this.index < this.slides.length - 3 ? this.index += 4 : this.index = this.index;
    console.log(this.index);
    this.slidesToShow();
  }

  backward() {
    this.index !== 0 ? this.index -= 4 : this.index = 0;
    console.log(this.index);
    this.slidesToShow();
  }



}
