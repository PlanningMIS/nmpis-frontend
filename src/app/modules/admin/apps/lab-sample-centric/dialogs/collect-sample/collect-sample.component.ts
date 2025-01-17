import { TextFieldModule } from '@angular/cdk/text-field';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-collect-sample',
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
    ], 
  templateUrl: './collect-sample.component.html',
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
export class CollectSampleDialog {

}
