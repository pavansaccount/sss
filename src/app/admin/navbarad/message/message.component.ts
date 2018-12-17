import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { StudentService } from '../../../studentservice/student.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }
  message = {
    rollno : '',
    message : ''
  };
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.putmessage(form.value).subscribe(
      res => {
      },
      err => {

      }
    );
  }
}
