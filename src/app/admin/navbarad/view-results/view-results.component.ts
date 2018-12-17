import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import {Results} from "../../../shared/results.model";
import {MatTableDataSource} from "@angular/material";
@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css']
})
export class ViewResultsComponent implements OnInit {
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
  ngOnInit() {

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
