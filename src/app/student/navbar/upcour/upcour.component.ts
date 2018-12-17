import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../shared/user.service';
import { Results } from '../../../shared/results.model';
@Component({
  selector: 'app-upcour',
  templateUrl: './upcour.component.html',
  styleUrls: ['./upcour.component.css']
})
export class UpcourComponent implements OnInit {
  readonly baseURL = 'http://localhost:5000';
  userDetails;
  selectedFile: File = null;
  constructor(public http: HttpClient,public userService: UserService) { }
  url = '';
  file ;
  ngOnInit() {

  }
  onFileSelected(event: Event)
  {
    this.selectedFile = (event.target as HTMLInputElement).files[0];
    /*if (this.selectedFile) {
      var reader = new FileReader();
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
      reader.readAsDataURL(this.selectedFile); // read file as data url
    }*/
  }
  onUpload() {

    var file = new FormData();
    file.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(this.baseURL + '/upload', file).subscribe(res => {
      console.log(event);
    })
  }
}
