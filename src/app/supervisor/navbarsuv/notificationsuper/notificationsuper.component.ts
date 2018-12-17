import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserService} from "../../../shared/user.service";
import {Router} from "@angular/router";
import {Noti} from "../../../shared/noti.model";

@Component({
  selector: 'app-notificationsuper',
  templateUrl: './notificationsuper.component.html',
  styleUrls: ['./notificationsuper.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsuperComponent implements OnInit {

  noti;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.userService.getnoti().subscribe((res) => {
      this.userService.noti = res as Noti[];
    });
  }
}
