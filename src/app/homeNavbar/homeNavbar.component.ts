import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './homeNavbar.component.html',
  styleUrls: ['./homeNavbar.component.css']
})
export class HomeNavbarComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
