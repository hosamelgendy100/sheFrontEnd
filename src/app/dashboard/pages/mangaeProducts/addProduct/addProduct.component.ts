import { ProductAvailableColor } from './../../../models/productAvailableColor';
import { ProductAvailableSize } from './../../../models/productAvailableSize';
import { ProductColor } from './../../../models/ProductColor';
import { ProductSize } from './../../../models/ProductSize';
import { Seller } from './../../../models/Seller';
import { Subcategory } from './../../../models/Subcategory';
import { Category } from './../../../models/Category';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/dashboard/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/dashboard/models/Product';
import { pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})

export class AddProductComponent implements OnInit {
  // Populate dropdown lists
  ctgsListDd: Category[]; subCtgsListDd: Subcategory[]; sellersListDd: Seller[];
  ProductSizesDd: ProductAvailableSize[]; ProductColorstDd: ProductAvailableColor[];
  productForm: FormGroup;
  productArr: Array<any> = [];
  product: Product;
  returnedModel: any;
  newCategoryId: number;
  checkBoxsValidation: boolean = true;

  constructor(public crudService: CrudService, public toast: ToastrService, public fb: FormBuilder) {}

  createProductForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      count: ['', Validators.required],
      onSale: ['False'],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      sellerId: ['', Validators.required]
    });
  }

  getErrorMessage(input) { return  `Please enter a valid ${input}`; }

  ngOnInit() {
    this.getAllDds();
    this.createProductForm();
  }

  getAllDds() {
    this.crudService.getAll('categories/').subscribe( result => this.ctgsListDd = result);
    this.crudService.getAll('sellers/').subscribe(result => this.sellersListDd = result);
    this.crudService.getAll('AvailableColors/').subscribe(result => this.ProductColorstDd = result);
    this.crudService.getAll('AvailableSizes/').subscribe(result => this.ProductSizesDd = result);
  }


  // add product to products table
  addModel() {
    if(this.selectedSizes.length === 0) { this.checkBoxsValidation = false; return false;}

    if (!this.productForm.valid) { this.toast.error( 'All fields are required'); }
    else{
      this.product = Object.assign( {}, this.productForm.value);
      this.crudService.add(this.product, 'Products').subscribe((res: Response)=> {
        this.returnedModel = Object.assign( {}, res);
        this.newCategoryId = this.returnedModel.id;
        console.log(this.newCategoryId);
        this.toast.success(`product ${this.product.name} has been added successfully`);
      }, 
      error => { this.toast.error( 'product hasn\'t been added'); },
       () => {
        this.addProductSizes();
        this.addProductColors();
      });
    }
  }
   

  private addProductSizes() {
    this.productArr = [];
    this.selectedSizes.forEach(size => {
      const sizeModel: ProductSize = { availableSizeId: size, productId: this.newCategoryId };
      this.productArr.push(sizeModel);
    });
    this.crudService.add(this.productArr, 'ProductSizes').subscribe();
  }


  private addProductColors() {
    this.productArr = [];

    this.selectedColors.forEach(color => {
      const colorModel: ProductColor = { availableColorId: color, productId: this.newCategoryId };
      this.productArr.push(colorModel);
    });
    this.crudService.add(this.productArr, 'ProductColors').subscribe();
  }


  getSubcategories(id) {
    const api = 'subcategories/GetSubcategoryByCategoryId/';
    this.crudService.getById(api, id).subscribe(result => this.subCtgsListDd = result);
  }

  get selectedSizes() { 
    return this.ProductSizesDd.filter(size => size.checked).map(opt => opt.id);
  }

  get selectedColors() { 
    return this.ProductColorstDd.filter(color => color.checked).map(opt => opt.id)
  }

  

}



// () => {
//   console.log('product size added')
//  }, error => { this.toast.error(error.message + '\n' + 'Product sizes hasn\'t been added') }
// console.log('product color: ' + this.newCategoryId);
 