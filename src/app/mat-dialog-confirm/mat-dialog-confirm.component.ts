import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-confirm',
  templateUrl: './mat-dialog-confirm.component.html',
  styleUrls: ['./mat-dialog-confirm.component.scss']
})
export class MatDialogConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public _dialogRef:MatDialogRef< MatDialogConfirmComponent >){}
  closeDialog(){
this._dialogRef.close(false);
  }
}
