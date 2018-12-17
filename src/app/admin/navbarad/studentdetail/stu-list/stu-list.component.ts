import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource, MatDialogConfig} from '@angular/material';
import { UserService } from '../../../../shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component ({
  selector: 'app-stu-list',
  templateUrl: './stu-list.component.html',
  styleUrls: ['./stu-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StuListComponent implements OnInit {
  supervisor = 'student';
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
    this.router.navigateByUrl('/stucreate');
  }
  onEdit(email) {
    this.userService.changeMessage(email);
    this.router.navigateByUrl('/studet');
  }
  onDelete(_id: String) {
        if (confirm('Are you sure to delete this record ?') == true) {
          this.userService.deleteuser(_id).subscribe((res) => {
            this.ngOnInit();
          });
        }
      }
}
