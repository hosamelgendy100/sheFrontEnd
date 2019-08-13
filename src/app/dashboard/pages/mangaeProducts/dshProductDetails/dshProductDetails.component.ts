import { MessageService } from './../../../../sharedServices/message.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/dashboard/models/Product';
import { BsModalService } from 'ngx-bootstrap';
import { CrudService } from 'src/app/dashboard/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dshProductDetails',
  templateUrl: './dshProductDetails.component.html',
  styleUrls: ['./dshProductDetails.component.css']
})

export class DshProductDetailsComponent implements OnInit {
  imagesApi = environment.imageApi;
  apiController = 'products/';
  product: Product;
  panelOpenState = false;


  constructor(private crudService: CrudService, public aroute: ActivatedRoute,
              private toast: ToastrService) {}

  ngOnInit() {
    this.aroute.data.subscribe(data => {this.product = data['product']});
  }

  getProduct(id) {
    this.crudService.getById(this.apiController, id).subscribe((response) => {
      this.product = response;
      console.log(this.product);
    }, error => { console.log(error.message)});
  }


  

}
