import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// tslint:disable-next-line:semicolon
import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgetpasswordComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

    model = {
    email : ''
  };
 // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.forget(form.value.email).subscribe(
      res => {
      },
      err => {}
      // this.showSucessMessage = true;
      //setTimeout(() => { this.router.navigate(['/login']); }, 4000);
    );

  }

}
