import { ProductAvailableSize } from './../../models/productAvailableSize';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ProductAvailableColor } from './../../models/productAvailableColor';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})

export class SizesComponent implements OnInit {
  public tableRows = [ 'No.', 'Name', 'Delete'];
  modalRef: BsModalRef;
  modelsList: any;
  editmodel: ProductAvailableSize;
  config = { animated: true };
  apiController = 'AvailableSizes/';

  constructor(private modalService: BsModalService, private crudService: CrudService,
              private toast: ToastrService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    document.getElementById('modelName').focus();
  }

  ngOnInit() {
    this.getall();
    this.cancelUpdateMode();
  }

  addModel(name): void {
    if (name === null || name === '') {
         document.getElementById('modelName').style.border = '1px solid red'; return; }

    const newModel: ProductAvailableSize = { name } as ProductAvailableSize;
    this.crudService.add(newModel, this.apiController).subscribe(() => {
      this.toast.success('model added');
      this.modalRef.hide();
      this.getall();
    }, error => { this.toast.error(error); });
  }


  getall(): void {
     this.crudService.getAll(this.apiController).subscribe( result => this.modelsList = result);
  }


  edit(model) {
    this.editmodel = model ;
  }


  update() {
    if (this.editmodel) {
        if (this.editmodel.name === '') { this.getall(); return false;  }
        else {
        this.crudService.update(this.editmodel.id, this.editmodel, this.apiController).subscribe();
        this.editmodel = undefined;
        this.getall();
       }
      }
  }


  delete(id) {
    if (confirm('Are you sure?')) {
        this.crudService.delete(id, this.apiController).subscribe();
        this.getall();
    }
  }


  cancelUpdateMode() {
    document.onkeydown = (evt) => {
      if (evt.key === '27' || evt.key === 'Escape' || evt.key === 'Esc' ) { 
        this.editmodel = null;  }};
  }

  enterPressed() {
    document.onkeydown = (evt) => {
      if (evt.key === 'Enter') this.update();
    }
  }

}
