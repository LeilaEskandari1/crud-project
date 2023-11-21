import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreserviceService } from '../core/coreservice.service';

@Component({
  selector: 'app-cmp-add-edit',
  templateUrl: './cmp-add-edit.component.html',
  styleUrls: ['./cmp-add-edit.component.scss']
})
export class CmpAddEditComponent implements OnInit {
  education: string[] = [
    'Diplom',
    'Intermetian',
    'Gradute'
  ];
  empForm!: FormGroup;
  constructor(private _fb: FormBuilder
    , private _empservice: EmployeeService
    , private _dialogref: MatDialogRef<CmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackbar:CoreserviceService) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experince: '',
      package: ''

    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.empForm.valid) {
     if(this.data){
      this._empservice.updateEmployee(this.data.id,this.empForm.value).subscribe(
        {
          next:(val:any)=>{ 
            this._snackbar.openSnackBar('emplyee deial updared','done');
          this._dialogref.close(true);
        },error(err) {
            console.log(err)

          },
        }
      )
     }
     else{
      this._empservice.addEmployee(this.empForm.value).subscribe({

        next: (val: any) => {
         
          this._snackbar.openSnackBar('employee added sucsses','done')
          this._dialogref.close(true);

        },
        error(err) {
          console.log(err);
        },
      }
      )
    }}


  }
}

