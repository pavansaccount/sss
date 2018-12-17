import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatDialogConfig} from '@angular/material';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';
@Component({
  selector: 'app-assign-stu',
  templateUrl: './assign-stu.component.html',
  styleUrls: ['./assign-stu.component.css']
})
export class AssignStuComponent implements OnInit {

  supervisor = 'student';
  displayedColumns: string[] = [ 'role', 'actions'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public userService: UserService, public router: Router) {

  }
  userDetails;
  rollno;
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.dataSource = new MatTableDataSource(this.userDetails.assign);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {}
    );

  }




  onEdit(rollno) {
    this.userService.changeMessage(rollno);
    this.router.navigateByUrl('/studetails');
  }

}
