import { NgClass } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EmpowerConfirmationConfig } from '@empower/services/confirmation/confirmation.types';
import { empowerAnimations } from '@empower/animations';

@Component({
    selector: 'empower-confirmation-alert',
    templateUrl: './alert.component.html',
    styles: [
        `
            .empower-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-mdc-dialog-container {
                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    animations: empowerAnimations,
    imports: [MatButtonModule, MatDialogModule, MatIconModule, NgClass],
})
export class EmpowerConfirmationAlertComponent {
    data: EmpowerConfirmationConfig = inject(MAT_DIALOG_DATA);
}
