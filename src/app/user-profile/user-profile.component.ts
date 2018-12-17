import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
         if (res['user'].role == 'admin') {
         this.router.navigateByUrl('/dashboardad');
         }
        if (res['user'].role == 'student') {
        this.router.navigateByUrl('/dashboard');
         }
         if (res['user'].role == 'supervisor') {
          this.router.navigateByUrl('/dashboardsuv');
           }
      },
      err => {}
    );
  }
    onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
