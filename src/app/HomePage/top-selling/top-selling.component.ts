import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {
  slides = [];
  constructor() { }

  ngOnInit() {
    for (let i = 70; i < 78; i++) {
      this.slides.push(`https://picsum.photos/id/${i}/600/900`);
    }



  }
}
