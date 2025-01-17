import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HistopathologyDialog } from '../dialogs/histopathology/histopathology.component';

@Component({
  selector: 'app-histopathology',
  standalone: true,
  imports: [],
  templateUrl: './histopathology.component.html',
  styleUrl: './histopathology.component.scss'
})
export class HistopathologyComponent {
   readonly dialog = inject(MatDialog);
  
      /**
       * Open confirmation dialog
       */
      openChemistryDialog(): void {
          // Open the dialog
          this.dialog.open(HistopathologyDialog, {
              autoFocus: false,
              panelClass: 'empower-confirmation-dialog-panel',
          });
      }
}
