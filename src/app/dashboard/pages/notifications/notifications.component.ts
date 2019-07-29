import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public notificationsList = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5'];

  constructor() { }

  ngOnInit() {
  }

}
