import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Results } from '../../../shared/results.model';
@Component({
  selector: 'app-seecourse',
  templateUrl: './seecourse.component.html',
  styleUrls: ['./seecourse.component.css']
})
export class SeecourseComponent implements OnInit {

  readonly baseURL = 'http://localhost:5000';

  selectedFile: File = null;
  constructor(public http: HttpClient) { }
  file ;
  ngOnInit() {
    this.http.get(this.baseURL + `/files`).subscribe(res => {
      this.file = res as Results[];
      console.log(this.file);
    });
  }

}
