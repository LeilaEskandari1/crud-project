import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { 
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreserviceService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message:string,action:string='ok') {
    this._snackBar.open(message,action,{
  
      verticalPosition:this.verticalPosition,
      duration:  1000,
     
    });
  }
}
