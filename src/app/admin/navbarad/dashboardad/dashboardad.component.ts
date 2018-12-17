import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher  } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'hammerjs';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-dashboardad',
  templateUrl: './dashboardad.component.html',
  styleUrls: ['./dashboardad.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardadComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
  }
onsup() {
  this.router.navigate(['/assignedsup']);
}
oncheck() {
  this.router.navigate(['/checkres']);
}
oninb() {
  this.router.navigate(['/inbox']);
}
onnoti() {
  this.router.navigate(['/notification']);
}
}
