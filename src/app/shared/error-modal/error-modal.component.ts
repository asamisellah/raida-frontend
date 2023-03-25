import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.sass']
})
export class ErrorModalComponent {
  constructor(public dialogRef: MatDialogRef<ErrorModalComponent>) { }

}
