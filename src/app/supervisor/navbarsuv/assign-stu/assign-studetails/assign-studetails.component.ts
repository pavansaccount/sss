import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/user.service';
import { StudentService } from '../../../../studentservice/student.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign-studetails',
  templateUrl: './assign-studetails.component.html',
  styleUrls: ['./assign-studetails.component.css']
})
export class AssignStudetailsComponent implements OnInit {
  userDetails: any;
  message: string;

  constructor(public userService: UserService, public studentService: StudentService) { }

  ngOnInit() {

    this.userService.currentMessage.subscribe(message => this.message = message);
    console.log(this.message);
    this.studentService.getStudent(this.message).subscribe(
      res => {
        this.studentService.selectedStudent = res['stu'];
      },
      err => {}
    );
  }
  onSubmit(form: NgForm) {
    this.studentService.putStudent(form.value).subscribe((res) => {

    });
  }
}
