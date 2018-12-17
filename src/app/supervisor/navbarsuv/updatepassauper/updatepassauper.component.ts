import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-updatepassauper',
  templateUrl: './updatepassauper.component.html',
  styleUrls: ['./updatepassauper.component.css']
})
export class UpdatepassauperComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) { }
  userDetails;
  model = {
    password : '',
    cpassword:''
  };
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {}
    );
  }
  onSubmit(form: NgForm) {
    this.userService.updatepassword(form.value).subscribe(
      res => {

      },

    );
  }
}
