import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher  } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'hammerjs';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-navbarad',
  templateUrl: './navbarad.component.html',
  styleUrls: ['./navbarad.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbaradComponent implements OnInit {
  isavailable = true;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  // tslint:disable-next-line:max-line-length
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public userService: UserService, public router: Router, iconRegistry: MatIconRegistry) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  userDetails;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        if (!(res['user'].role == 'admin')) {
        this.router.navigateByUrl('/login');
         }
      },
      err => {}
    );
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/']);
  }
}
