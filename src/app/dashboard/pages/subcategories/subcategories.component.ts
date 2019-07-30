import { AlertifyService } from '../../../sharedServices/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { Subcategory } from '../../models/Subcategory';
import { CrudService } from '../../services/crud.service';
import { Category } from '../../models/Category';
import { TableData } from '../../models/TableData';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})

export class SubcategoriesComponent implements OnInit {
  public tableData: TableData;
  modalRef: BsModalRef;
  modelsList: any;
  editmodel: Subcategory;
  config = { animated: true };
  apiController = 'subcategories/';
  categoriesList: any;

  constructor(private modalService: BsModalService, private crudService: CrudService,
              private alert: AlertifyService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    document.getElementById('modelName').focus();
  }


  ngOnInit() {
    this.getall();
    this.getCategories();
    this.cancelUpdateMode();
  }


  dataValidation(name?, categoryId?): boolean {
    if (name === null || name === '' || categoryId === null || categoryId === '') {
        document.getElementById('modelName').style.border = '1px solid red';
        document.getElementById('modelCategoryId').style.border = '1px solid red';
        return false;
     } else {return true; }
  }


  addModel(name, categoryId): void {
    if (!this.dataValidation(name, categoryId)) {
      const newModel: Subcategory = { name, categoryId } as Subcategory;
      this.crudService.add(newModel, this.apiController).subscribe(() => {
        this.toast.success('model added');
        this.modalRef.hide();
        this.getall();
      }, error => { this.toast.error(error); });
    }
  }


  getall(): void {
    this.tableData = { headerRow: [ 'No.', 'Subcategory name', 'Category name', 'Delete'] };
    this.crudService.getAll(this.apiController).subscribe( result => this.modelsList = result);
  }


  getCategories() {
    this.crudService.getAll('categories/').subscribe( result => this.categoriesList = result);
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
      this.getall();
    }
    this.editmodel = undefined;
  }


  delete(id) {
    if (confirm('Are you sure?')) {
        this.crudService.delete(id, this.apiController).subscribe();
        this.getall();
    }
  }


  cancelUpdateMode() {
    document.onkeydown = (evt) => {
      if (evt.key === '27' || evt.key === 'Escape' || evt.key === 'Esc') { 
        this.editmodel = null;  }};
  }

}
