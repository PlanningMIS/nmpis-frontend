import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ParasitologyDialog } from '../dialogs/parasitology/parasitology.component';

@Component({
  selector: 'app-parasitology',
  standalone: true,
  imports: [],
  templateUrl: './parasitology.component.html',
  styleUrl: './parasitology.component.scss'
})
export class ParasitologyComponent {

     readonly dialog = inject(MatDialog);
    
        /**
         * Open confirmation dialog
         */
        openChemistryDialog(): void {
            // Open the dialog
            this.dialog.open(ParasitologyDialog, {
                autoFocus: false,
                panelClass: 'empower-confirmation-dialog-panel',
            });
        }
}
