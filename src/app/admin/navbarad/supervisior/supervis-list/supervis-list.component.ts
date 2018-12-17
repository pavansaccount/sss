import { Component, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogConfig} from '@angular/material';
import { UserService } from '../../../../shared/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';

@Component ({
  selector: 'app-supervis-list',
  templateUrl: './supervis-list.component.html',
  styleUrls: ['./supervis-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupervisListComponent implements OnInit {
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

    this.userService.currentMessage.subscribe(message => this.message = message);
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
}



