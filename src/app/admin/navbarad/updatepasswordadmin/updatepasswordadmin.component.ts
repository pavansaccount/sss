import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatepasswordadmin',
  templateUrl: './updatepasswordadmin.component.html',
  styleUrls: ['./updatepasswordadmin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdatepasswordadminComponent implements OnInit {
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
