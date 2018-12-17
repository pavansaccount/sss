import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Results} from "../../../shared/results.model";
import {MatTableDataSource} from "@angular/material";
import {UserService} from "../../../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {
model = {
  rollno: '',
  year: '',
  subname: '',
  submarks: ''
};
  constructor(public userService: UserService, public router: Router) {

  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.postresults(form.value).subscribe(
      res => {

      },

    );
  }
}
