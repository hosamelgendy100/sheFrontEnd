import { Product } from './../../../dashboard/models/Product';
import { ProductAvailableColor } from './../../../dashboard/models/productAvailableColor';
import { ProductAvailableSize } from './../../../dashboard/models/productAvailableSize';
import { CrudService } from 'src/app/dashboard/services/crud.service';
import { Category } from './../../../dashboard/models/Category';
import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})

export class ViewProductsComponent implements OnInit {
  products : Product [];
  categories: Category[];
  ProductColorstDd: ProductAvailableColor[];
  ProductSizesDd: ProductAvailableSize[];
  imagesApi = environment.imageApi;

  
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    //get products
    this.crudService.getAll('Products/').subscribe(result =>{ this.products = result});

    //get sizes
    this.crudService.getAll('AvailableSizes/').subscribe(result => this.ProductSizesDd = result);

    //get colors
    this.crudService.getAll('AvailableColors/').subscribe(result => this.ProductColorstDd = result);

    //get categories
    this.crudService.getAll('categories/').subscribe(result => this.categories = result );
  }





  // Price Slider
  minValue: number = 40;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min:</b> QR ' + value;
        case LabelType.High:
          return '<b>Max:</b> QR ' + value;
        default:
          return 'QR' + value;
      }
    }
  };




}
