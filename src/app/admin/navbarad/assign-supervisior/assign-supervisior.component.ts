import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {User} from "../../../shared/user.model";
import {Assign} from "../../../shared/assign.model";
import {UserService} from "../../../shared/user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assign-supervisior',
  templateUrl: './assign-supervisior.component.html',
  styleUrls: ['./assign-supervisior.component.css']
})
export class AssignSupervisiorComponent implements OnInit {
  model = {
    rollsupervisor : '',
    rollstudent : ''
  };

  supervisor = 'supervisor';
  message: string;
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;

  constructor(public userService: UserService, public router: Router) {

  }

  ngOnInit() {
    this.userService.getUserdet(this.supervisor).subscribe(
      res => {
        this.userService.userDetails = res as User[];
        this.dataSource = new MatTableDataSource(this.userService.userDetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {}
    );
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter('');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onCreate() {
    this.router.navigateByUrl('/supcreate');
  }

  onEdit(email) {
    this.userService.changeMessage(email);
    this.router.navigateByUrl('/superedit');
  }
  onDelete(_id: String) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteuser(_id).subscribe((res) => {
        this.ngOnInit();
      });
    }
  }


  onSubmit(form: NgForm) {
    this.userService.postassign(form.value).subscribe(
      res => {

      },

    );
  }
}



