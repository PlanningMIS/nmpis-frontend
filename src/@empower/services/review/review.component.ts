import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule, formatDate } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'project-review',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
      MatIconModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      TextFieldModule,
      ReactiveFormsModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatSelectModule,
      MatOptionModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogTitle, 
      MatDialogContent, 
      MatDialogClose,
      CommonModule
  ], 
  templateUrl: './review.component.html',
  styles: [
    `
        .empower-confirmation-dialog-panel {
            @screen md {
                @apply w-1/2;
            }

            .mat-mdc-dialog-container {
                .mat-mdc-dialog-surface {
                    padding: 0 !important;
                }
            }
        }
    `,
],
})
export class ReviewDialog {
    reviewForm: FormGroup;

    constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ReviewDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    
    ) {}
  
    ngOnInit() {


      this.reviewForm = this.fb.group({
      review: ['', Validators.required],
    });

    }

    onSubmit() {
        if (this.reviewForm.valid) {

         //format angular date 
        }
      }
    
      onCancel() {
        this.dialogRef.close();
      }

}
