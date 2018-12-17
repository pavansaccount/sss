import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { Noti } from '../../../shared/noti.model';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {
  noti;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.userService.getnoti().subscribe((res) => {
      this.userService.noti = res as Noti[];
    });
  }

}
