import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'settings-security',
    templateUrl: './security.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonModule,
        CommonModule
    ],
})
export class SettingsSecurityComponent implements OnInit {
    securityForm: UntypedFormGroup;

    /**
     * Constructor
     */
    constructor(private _formBuilder: UntypedFormBuilder) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
    }

    files = [
        {
          name: 'Report_2025.pdf',
          type: 'PDF',
          uploaded: '2025-01-15',
          size: '2.4 MB',
        },
        {
          name: 'Project_Plan.docx',
          type: 'Word Document',
          uploaded: '2025-01-12',
          size: '1.8 MB',
        },
        {
          name: 'Presentation.pptx',
          type: 'PowerPoint',
          uploaded: '2025-01-10',
          size: '3.2 MB',
        },
        {
          name: 'Data_Analysis.xlsx',
          type: 'Excel',
          uploaded: '2025-01-08',
          size: '2.0 MB',
        },
      ];
    
      onDownload(file: any) {
        alert(`Downloading ${file.name}`);
        // Add logic to handle file download
      }
}
