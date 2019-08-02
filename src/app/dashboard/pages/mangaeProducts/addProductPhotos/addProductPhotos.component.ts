import { CrudService } from 'src/app/dashboard/services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addProductPhotos',
  templateUrl: './addProductPhotos.component.html',
  styleUrls: ['./addProductPhotos.component.css']
})
export class AddProductPhotosComponent implements OnInit {

  constructor(public crudService: CrudService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    
  }

}
