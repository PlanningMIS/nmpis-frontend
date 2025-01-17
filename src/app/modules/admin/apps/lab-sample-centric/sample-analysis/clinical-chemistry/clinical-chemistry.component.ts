import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClinicalChemistryDialog } from '../dialogs/clinical-chemistry/clinical-chemistry.component';

@Component({
  selector: 'app-clinical-chemistry',
  standalone: true,
  imports: [],
  templateUrl: './clinical-chemistry.component.html',
  styleUrl: './clinical-chemistry.component.scss'
})
export class ClinicalChemistryComponent {

    readonly dialog = inject(MatDialog);
  
      /**
       * Open confirmation dialog
       */
      openChemistryDialog(): void {
          // Open the dialog
          this.dialog.open(ClinicalChemistryDialog, {
              autoFocus: false,
              panelClass: 'empower-confirmation-dialog-panel',
          });
      }
}
