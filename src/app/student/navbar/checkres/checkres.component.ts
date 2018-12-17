import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';
import { Results } from '../../../shared/results.model';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-checkres',
  templateUrl: './checkres.component.html',
  styleUrls: ['./checkres.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckresComponent implements OnInit {
  displayedColumns: string[] = ['subjectname','marks'];
  dataSource: MatTableDataSource<Results>;
  valid = true;
  constructor(public userService: UserService, public router: Router) {

  }
  userDetails;
  model = {
    rollno : '',
    year: ''
  };
  Results = {
    rollno : '',
    year: ''
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
    this.userService.getresults(form.value).subscribe(
      res => {
        this.valid = false;
        this.userService.results = res as Results[];
        this.dataSource = new MatTableDataSource(this.userService.results.year[0].subject);
      },

    );
  }
}
