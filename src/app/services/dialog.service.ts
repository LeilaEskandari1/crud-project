import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfirmComponent } from '../mat-dialog-confirm/mat-dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog:MatDialog) { }
  openConfirmdialog(msg:any){
   return this._dialog.open(MatDialogConfirmComponent,{
      width:'360px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      data:{message:msg}
    });
      
     
    
  }
}
