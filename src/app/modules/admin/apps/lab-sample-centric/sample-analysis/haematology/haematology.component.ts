import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HaematologyDialog } from '../dialogs/haematology/haematology.component';

@Component({
  selector: 'app-haematology',
  standalone: true,
  imports: [],
  templateUrl: './haematology.component.html',
  styleUrl: './haematology.component.scss'
})
export class HaematologyComponent {

     readonly dialog = inject(MatDialog);
    
        /**
         * Open confirmation dialog
         */
        openChemistryDialog(): void {
            // Open the dialog
            this.dialog.open(HaematologyDialog, {
                autoFocus: false,
                panelClass: 'empower-confirmation-dialog-panel',
            });
        }
}
