import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudent: Student;
  student: Student[];
  readonly baseURL = 'http://localhost:3000/student';
  constructor(public http: HttpClient) { }

  postStudent(stu: Student) {
    return this.http.post(this.baseURL, stu);
  }

  getStudent(rollno) {
    return this.http.get(this.baseURL + `/${rollno}`);
  }

  putStudent(stu: Student) {
    return this.http.put(this.baseURL + `/${stu._id}`, stu);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
