import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { ProductAvailableSize } from './../../models/productAvailableSize';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ProductAvailableColor } from './../../models/productAvailableColor';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CrudService } from '../../services/crud.service';
import { Seller } from '../../models/Seller';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})

export class SellersComponent implements OnInit {
  public tableRows = [ 'No.', 'Full Name', 'Phone Number', 'Email', 'Company Name'
                        , 'Web Site', 'Country', 'Edit', 'Delete'];
  modalRef: BsModalRef;
  modelsList: Seller[];
  sellerModel: Seller;
  config = { animated: true };
  apiController = 'Sellers/';
  sellerForm: FormGroup
  editMode: boolean = false;

  constructor(private modalService: BsModalService, private crudService: CrudService,
              private toast: ToastrService, public fb: FormBuilder) {}

  openModal(template: TemplateRef<any>) {
    this.createEmptySellerForm();
    this.modalRef = this.modalService.show(template, this.config);
    document.getElementById('seller-name').focus();
  }

  createEmptySellerForm() {
    this.sellerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: new FormControl ('', [Validators.required, Validators.email]),
      countryOfOrigin: ['', Validators.required],
      webSiteUrl: new FormControl('', [Validators.required]),
      companyName: ['', Validators.required],
    });
  }


  createEditSellerForm(seller: Seller) {
    this.sellerForm = this.fb.group({
      id: seller.id,
      name: seller.name,
      lastName: seller.lastName,
      phoneNumber: seller.phoneNumber ,
      email: seller.email,
      countryOfOrigin: seller.countryOfOrigin ,
      webSiteUrl: seller.webSiteUrl,
      companyName: seller.companyName,
    });
  }


  public getErrorMessage(input) { return  `Please enter a valid ${input}`; }
  
  ngOnInit() {
    this.getall();
  }


  validateSellerForm(): Boolean{
    if (this.sellerForm.valid){
      for (const field in this.sellerForm.controls) { 
        const control = this.sellerForm.get(field);
        if(control.value.trim()) return true;
        else {
          this.toast.error( 'All fields are required') ;
          return false;
        }
      }
    }
  }


  addModel() {
    if(this.validateSellerForm){
    this.sellerModel = Object.assign({}, this.sellerForm.value);
    this.crudService.add(this.sellerModel, this.apiController).subscribe(() => {
      this.toast.success('model added');
      this.modalRef.hide();
      this.getall();
    }, error => { this.toast.error(error); });
  }}


  getall(): void {
     this.crudService.getAll(this.apiController).subscribe( result => this.modelsList = result);
  }


  edit(template, seller) {
    this.editMode = true;
    this.modalRef = this.modalService.show(template, this.config);
    this.createEditSellerForm(seller);
  }


  update() {
    if(this.validateSellerForm){
    this.sellerModel = Object.assign({}, this.sellerForm.value);
    this.crudService.update(this.sellerModel.id, this.sellerModel, this.apiController).subscribe(() => {
      this.toast.success('model updated');
      this.modalRef.hide();
      this.getall();
    }, error => { this.toast.error(error); });
  }}


  delete(id) {
    if (confirm('Are you sure?')) {
        this.crudService.delete(id, this.apiController).subscribe();
        this.getall();
    }
  }


}
