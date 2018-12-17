import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { StudentService } from '../../../studentservice/student.service';

@Component({
  selector: 'app-notificationad',
  templateUrl: './notificationad.component.html',
  styleUrls: ['./notificationad.component.css']
})
export class NotificationadComponent implements OnInit {
  noti = {
    head : '',
    body : ''
  };
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.putnoti(form.value).subscribe(
      res => {
      },
      err => {

      }
    );
  }
}
