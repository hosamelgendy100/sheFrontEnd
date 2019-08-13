import { Product } from './../../../dashboard/models/Product';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../sharedServices/alertify.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  imagesApi = environment.imageApi;
  productsFromDb = [];
  index = 4;
  relatedProducts = [];
  product : Product;
  
  relatedProductsShow() {
    for (let i = 50; i < 66; i++) {
      this.productsFromDb.push(`https://picsum.photos/id/${i}/600/900`);
    }

    this.relatedProducts = [];
    for ( let i = this.index; i < this.index + 4; i++ ) {
      this.relatedProducts.push(this.productsFromDb[i]);
    }
  }

  constructor(private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.data.subscribe(data => {this.product = data['product']});
    this.relatedProductsShow();
  }

 
  forward() {
    this.index < this.productsFromDb.length - 3 ? this.index += 4 : this.index = this.index;
    this.relatedProductsShow();
  }

  backward() {
    this.index !== 0 ? this.index -= 4 : this.index = 0;
    this.relatedProductsShow();
  }

}
