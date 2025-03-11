import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReviewDialog } from '@empower/services/review/review.component';


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {


constructor(private router:Router,private matDialog: MatDialog
){}

  addReview() {
      this.matDialog.open(ReviewDialog, {
        autoFocus: false,
        panelClass: 'empower-confirmation-dialog-panel',
      });
    }

}
