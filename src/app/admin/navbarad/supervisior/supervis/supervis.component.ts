import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/user.service';
import { StudentService } from '../../../../studentservice/student.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-supervis',
  templateUrl: './supervis.component.html',
  styleUrls: ['./supervis.component.css'],
  providers: [StudentService]

})
export class SupervisComponent implements OnInit {
  userDetails: any;
  message: string;

  constructor(public userService: UserService, public studentService: StudentService) { }

  ngOnInit() {
    this.userService.currentMessage.subscribe(message => this.message = message);
    this.studentService.getStudent(this.message).subscribe(
      res => {
        this.studentService.selectedStudent = res['stu'];
        this.studentService.selectedStudent.email = this.message;
      },
      err => {}
    );
    this.userDetails = this.message;
  }



}
