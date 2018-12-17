import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher  } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'hammerjs';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardsComponent implements OnInit {
 
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
