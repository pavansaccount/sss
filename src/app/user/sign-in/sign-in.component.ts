import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// tslint:disable-next-line:semicolon
import { UserService } from '../../shared/user.service'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  userDetails;
  constructor(public userService: UserService, public router: Router) { }

  model = {
    email : '',
    password : ''
  };
  // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  ngOnInit() {
    if (this.userService.isLoggedIn()) {
   this.router.navigateByUrl('/userprofile');
    }
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
             this.serverErrorMessages = 'Either email/password entered is worng.';
        }
      }
    );
  }
 forget() {
    this.router.navigate(['/forget']);
  }
}
