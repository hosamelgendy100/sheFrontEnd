import { ToastrService } from 'ngx-toastr';
import { CrudService } from './../../../services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output } from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-addProductPhotos',
  templateUrl: './addProductPhotos.component.html',
  styleUrls: ['./addProductPhotos.component.css']
})

export class AddProductPhotosComponent implements OnInit{
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  newCategoryId: any;
  api = environment.API + 'Products/AddProductPhotos/';

  constructor(private aroute: ActivatedRoute, private route: Router, private toast: ToastrService ) { }

  ngOnInit() {
    this.newCategoryId = this.aroute.snapshot.queryParamMap.get('newCategoryId') || '';
    this.initializeUploader();
  }


  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.api + this.newCategoryId,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: false,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
    
    this.uploader.onCompleteAll = () => {
      this.toast.success('Product photos uploaded successfully');
      this.route.navigate(["dshProductDetails/",this.newCategoryId]);
    };
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  


}
