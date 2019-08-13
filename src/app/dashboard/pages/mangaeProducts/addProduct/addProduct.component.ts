import { Router, ActivatedRoute } from '@angular/router';
import { ProductAvailableColor } from './../../../models/productAvailableColor';
import { ProductAvailableSize } from './../../../models/productAvailableSize';
import { ProductSize } from './../../../models/ProductSize';
import { Seller } from './../../../models/Seller';
import { Subcategory } from './../../../models/Subcategory';
import { Category } from './../../../models/Category';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CrudService } from 'src/app/dashboard/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/dashboard/models/Product';
import { pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { emit } from 'cluster';

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
  newCategoryId: any;
  checkBoxsValidation: boolean = true;
  productCount: number;
  productId: any;

  constructor(public crudService: CrudService, public toast: ToastrService, public fb: FormBuilder,
               private router: Router, private aroute: ActivatedRoute) 
  {
    
  }

  public createEmptyProductForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      onSale: ['False'],
      color: ['', Validators.required],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      sellerId: ['', Validators.required]
    });
  }

  
  public createEditProductForm(product: Product) {
    this.productForm = this.fb.group({
      name: product.name,
      description: product.description,
      price: product.price,
      onSale: product.onSale,
      color: product.color,
      categoryId: product.categoryId,
      subCategoryId: product.subCategoryId,
      sellerId: product.sellerId
    });
  }

  public getErrorMessage(input) { return  `Please enter a valid ${input}`; }

  ngOnInit() {
    this.productId = this.aroute.snapshot.params['id'];
    this.getAllDds();
    if(this.productId) {
       this.aroute.data.subscribe(data => {this.product = data['product']});
       this.createEditProductForm(this.product);
       console.log(this.product);
    }
    else this.createEmptyProductForm();
  }

  public getAllDds() {
    this.crudService.getAll('categories/').subscribe( result => this.ctgsListDd = result);
    this.crudService.getAll('sellers/').subscribe(result => this.sellersListDd = result);
    this.crudService.getAll('AvailableColors/').subscribe(result => this.ProductColorstDd = result);
    this.crudService.getAll('AvailableSizes/').subscribe(result => this.ProductSizesDd = result);
  }


  // add product to products table
  public addModel() {
    if(this.selectedSizes.length === 0) { this.checkBoxsValidation = false; return false;}
    this.selectedSizes;

    if (!this.productForm.valid) { this.toast.error( 'All fields are required'); }
    else{
      this.product = Object.assign( {}, this.productForm.value);
      this.product.count = this.productCount;
      this.crudService.add(this.product, 'Products').subscribe((res: Response)=> {
        this.returnedModel = Object.assign( {}, res);
        this.newCategoryId = this.returnedModel.id;
        console.log(this.newCategoryId);
        this.toast.success(`product ${this.product.name} has been added successfully`);
      }, 
      error => { this.toast.error( 'product hasn\'t been added'); },
       () => {
        this.addProductSizes();
        this.router.navigate(["addProductPhotos/"] , {queryParams:{ newCategoryId: this.newCategoryId}});
      });
    }
  }
   

  private addProductSizes() {
    this.productArr = []; 
    this.selectedSizes.forEach(size => {
      const sizeModel: ProductSize = { availableSizeId: size.id,
                          productSizeCount: size.productSizeCount, productId: this.newCategoryId };
      this.productArr.push(sizeModel);
    });
    this.crudService.add(this.productArr, 'ProductSizes').subscribe();
  }


  getSubcategories(id) {
    const api = 'subcategories/GetSubcategoryByCategoryId/';
    this.crudService.getById(api, id).subscribe(result => this.subCtgsListDd = result);
  }

  
  get selectedSizes() { 
    this.productCount = 0;
    let selected = this.ProductSizesDd.filter(size => size.checked);
    selected.forEach(element => {
      if(element.productSizeCount == null) { 
        element.productSizeCount = 1;
        this.productCount++;
      }else{
        this.productCount += element.productSizeCount;
      }
    });
    return selected;
  }

  

}