import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/user.service';
import {Router} from '@angular/router';
import {Message} from '../../../shared/message.model';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  userDetails;
  message;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
      this.userService.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'].rollno;
          this.userService.getmessage(this.userDetails).subscribe(() => {
            this.userService.message = res as Message[];
          });
        },
        err => {}
      );
  }

}
