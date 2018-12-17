import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Noti } from './noti.model';
import { Message } from './message.model';
import { Results } from './results.model';
import { Assign } from './assign.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(public http: HttpClient) { }
  selectedUser: User = {
    rollno: '',
    email: '',
    password: ''
  };



  userDetails: User[];
  noti:  Noti[];
  message: Message[];
  assign : Assign[];
  results: Results[];
  user: User;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  // HttpMethods

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user, this.noAuthHeader);
  }
  postUsersup(user: User) {
    return this.http.post(environment.apiBaseUrl + '/supregister', user, this.noAuthHeader);
  }
  postUserstu(user: User) {
    return this.http.post(environment.apiBaseUrl + '/sturegister', user, this.noAuthHeader);
  }
  getresults(results) {
    return this.http.get(environment.apiBaseUrl + '/getresults'+ `/${results.rollno}` + `/${results.year}`);
  }
  postresults(results: Results){
    return this.http.post(environment.apiBaseUrl + '/postresults', results);
  }
  getnoti() {
    return this.http.get(environment.apiBaseUrl + '/getnoti');
  }
  getmessage(rollno) {
    return this.http.get(environment.apiBaseUrl + '/getmessage'+ `/${rollno}`);
  }
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }
  putnoti(noti : Noti){
    return this.http.post(environment.apiBaseUrl + '/putnoti', noti, this.noAuthHeader);
  }
  putmessage(message : Message){
    return this.http.post(environment.apiBaseUrl + '/putmessage', message, this.noAuthHeader);
  }
  updatepassword(assign: Assign) {
    return this.http.post(environment.apiBaseUrl + '/updatepassword', assign, this.noAuthHeader);
  }

  forget(emails) {
    return this.http.get(environment.apiBaseUrl + '/send?to=' + emails, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }
  getUserdet(supervisor) {
    return this.http.get(environment.apiBaseUrl + '/userdet?super=' + supervisor);
  }
postassign(rollno){
  return this.http.post(environment.apiBaseUrl + '/assign', rollno, this.noAuthHeader);
}
sub(token) {
  return this.http.post(environment.apiBaseUrl + '/sub', token, this.noAuthHeader);
}
deleteuser(_id) {
  return this.http.get(environment.apiBaseUrl + '/deluser?_id=' + _id);
}
  // Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }




 /* // fileupload
export class UploadFileService {

    constructor(private http: HttpClient) { }

    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData = new FormData();

      formdata.append('file', file);

      const req = new HttpRequest('POST', '/post', formdata, {
        reportProgress: true,
        responseType: 'text'
      });

      return this.http.request(req);
    }

    getFiles(): Observable<any> {
      return this.http.get('/getallfiles');
    }
  */
}
