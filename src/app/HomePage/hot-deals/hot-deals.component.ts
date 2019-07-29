import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.css']
})

export class HotDealsComponent implements OnInit {
  slides = [];
  constructor() { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    for (let i = 100; i < 104; i++) {
      this.slides.push(`https://picsum.photos/id/${i}/700/400`);
    }
  }

}
