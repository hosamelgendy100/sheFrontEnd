import { Product } from '../../../models/Product';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboardProducts',
  templateUrl: './dashboardProducts.component.html',
  styleUrls: ['./dashboardProducts.component.css']
})

export class DashboardProductsComponent implements OnInit {
  public tableTitles = ['No.', 'Name', 'Count', 'Main Photo', 'Price', 'On Sale', 'Category', 'Subcategory', 'Seller Name', 'Edit', 'Delete'];
  productsList: Product[];  // actual model container
  apiController = 'products/';

  constructor(private crudService: CrudService, private toast: ToastrService) {}

  ngOnInit() {
    this.getall();
  }

  getall(): void {
    this.crudService.getAll(this.apiController).subscribe( result => this.productsList = result);
  }


  delete(id) {
    if (confirm('Are you sure?')) {
        this.crudService.delete(id, this.apiController).subscribe();
        this.getall();
    }
  }


}
