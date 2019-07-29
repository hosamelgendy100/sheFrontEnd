import { ToastrService } from 'ngx-toastr';
import { Category } from './../../../models/Category';
import { CrudService } from '../../../services/crud.service';
import { TableData } from './../../../models/TableData';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public tableData: TableData;
  modalRef: BsModalRef;
  categoriesList: any;
  editCategory: Category;
  config = { animated: true };
  apiController = 'categories/';

  constructor(private modalService: BsModalService, private categoryService: CrudService,
              private toast: ToastrService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    document.getElementById('categoryName').focus();
  }

  ngOnInit() {
    this.getall();
  }

  addCategory(name: string): void {
    if (name === null || name === '') {
         document.getElementById('categoryName').style.border = '1px solid red'; return; }

    const newCategory: Category = { name } as Category;
    this.categoryService.add(newCategory, this.apiController).subscribe(() => {
      this.toast.success('category added');
      this.modalRef.hide();
      this.getall();
    }, error => { this.toast.error(error); });
  }


  getall(): void {
    this.tableData = { headerRow: [ 'No.', 'Name', 'Delete'] };
    this.categoryService.getAll(this.apiController).subscribe( result => this.categoriesList = result);
  }


  edit(category: Category) {
    this.editCategory = category ;
  }


  update() {
    if (this.editCategory) {
        this.categoryService.update(this.editCategory.id, this.editCategory, this.apiController).subscribe(); }
    this.editCategory = undefined;
  }


  delete(id: number) {
    if (confirm('Are you sure?')) {
        this.categoryService.delete(id, this.apiController).subscribe();
        this.getall();
    }
  }
}
