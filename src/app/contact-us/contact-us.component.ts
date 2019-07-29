import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  favouritProducts = [];
  constructor() { }

  ngOnInit() {
    for (let i = 120; i < 124; i++) {
      this.favouritProducts.push(`https://picsum.photos/id/${i}/700/900`);
    }
  }

}
