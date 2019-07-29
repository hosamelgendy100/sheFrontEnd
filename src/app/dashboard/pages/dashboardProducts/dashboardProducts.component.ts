import { TableData } from './../../../models/TableData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardProducts',
  templateUrl: './dashboardProducts.component.html',
  styleUrls: ['./dashboardProducts.component.css']
})
export class DashboardProductsComponent implements OnInit {
  public tableData: TableData;
  constructor() { }

  ngOnInit() {
    this.generateTableDate();
  }


  generateTableDate() {
    this.tableData = {
      headerRow: [ 'ID', 'Title', 'Description', 'Price', 'CreationDate', 'Category', 'SubCategory', 'Seller', 'edit', 'delete'],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', 'QR 36,738', 'Malawi', 'Malawi', 'Malawi'],
          ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', 'QR 23,789', 'Malawi', 'Malawi', 'Malawi'],
          ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', 'QR 56,142', 'Malawi', 'Malawi', 'Malawi'],
          ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', 'QR 38,735', 'Malawi', 'Malawi', 'Malawi'],
          ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', 'QR 63,542', 'Malawi', 'Malawi', 'Malawi'],
          ['6', 'Mason Porter', 'Chile', 'Gloucester', 'QR 78,615', 'Malawi', 'Malawi', 'Malawi']
      ]
    };
  }


}
