import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/dashboard/models/Product';
import { BsModalService } from 'ngx-bootstrap';
import { CrudService } from 'src/app/dashboard/services/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dshProductDetails',
  templateUrl: './dshProductDetails.component.html',
  styleUrls: ['./dshProductDetails.component.css']
})

export class DshProductDetailsComponent implements OnInit {
  editmodel: Product;
  apiController = 'products/';
  
  constructor(private modalService: BsModalService, private crudService: CrudService,
              private toast: ToastrService) {}

  ngOnInit() {
  }

  getProduct() {

  }


  edit(model) {
    this.editmodel = model ;
  }

  update(categoryId?) {
    if (this.editmodel) {
      if (this.editmodel.name === '' || this.editmodel.name === null) {
        return false; } else {
          if (categoryId) { this.editmodel.categoryId = categoryId; }
          this.crudService.update(this.editmodel.id, this.editmodel, this.apiController).subscribe();
          console.log(this.editmodel);
      }
      this.getProduct();
    }
    this.editmodel = undefined;
  }

}
