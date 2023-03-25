import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorModalComponent } from "./error-modal/error-modal.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [ErrorModalComponent],
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  exports: [CommonModule, ReactiveFormsModule, ErrorModalComponent],
})
export class SharedModule {}
