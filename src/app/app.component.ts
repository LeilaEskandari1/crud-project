import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CmpAddEditComponent } from './cmp-add-edit/cmp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { CoreserviceService } from './core/coreservice.service';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _dialog: MatDialog,
    private _empservice: EmployeeService,
    private _snackbar: CoreserviceService,
    private _deldialog: DialogService) { }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'gender', 'education', 'company', 'experince', 'package', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CmpAddEditComponent);
    dialogRef.afterClosed().subscribe(
      {
        next: (val) => { if (val) { this.getEmployeeList(); } }
      }
    )
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CmpAddEditComponent, {
      data: data,
    })
    dialogRef.afterClosed().subscribe(
      {
        next: (val) => { if (val) { this.getEmployeeList(); } }
      }
    )
  }

  getEmployeeList() {
    this._empservice.getEmployeeList().subscribe(
      {
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }, error(err) {
          console.log(err);
        },
      }
    )
  }
  ngOnInit(): void {
    this.getEmployeeList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id: number) {
    this._deldialog.openConfirmdialog('Are you Sure to Delete this record?').afterClosed().subscribe(
      (res) => {
        if (res) {
          this._empservice.deleteEmployeeService(id).subscribe(
            {
              next: (val) => {
                this._snackbar.openSnackBar('Employee deleted success', 'done');

                this.getEmployeeList();
              },
              error(err) {
                console.log(err)
              }

            }

          )

        }
      }
    );

  }
}


