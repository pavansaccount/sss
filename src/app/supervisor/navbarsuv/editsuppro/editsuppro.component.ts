import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../studentservice/student.service';
import { Student } from '../../../studentservice/student.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-editsuppro',
  templateUrl: './editsuppro.component.html',
  styleUrls: ['./editsuppro.component.css'],
  providers: [StudentService]
})
export class EditsupproComponent implements OnInit {

  constructor(public studentService: StudentService, public userService: UserService, public router: Router) { }
  userDetails;
  rollno;
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.rollno = res['user'].rollno;
        this.refreshStudentList(this.rollno);
      },
      err => {}
    );
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.studentService.selectedStudent = {
      _id: '',
      rollno:'',
      email: '',
      name: '',
      position: '',
      office: '',
      salary: null
    };
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {}
    );
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.studentService.postStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentList(form.value.rollno);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    } else {
      this.studentService.putStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentList(form.value.rollno);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  refreshStudentList(rollno) {
    this.studentService.getStudent(this.rollno).subscribe(
      res => {
        this.studentService.selectedStudent = res['stu'];
      },
      err => {}
    );
  }
}
