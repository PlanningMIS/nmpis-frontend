import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { EmpowerAIReviewComponent } from '@empower/services/ai/review/ai-review.component';
import { EmpowerConfirmationService } from '@empower/services/confirmation';

@Component({
  selector: 'app-criteria-accessment',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatDialogModule
    ],
  templateUrl: './criteria-accessment.component.html',
  styleUrl: './criteria-accessment.component.scss'
})

export class CriteriaAccessmentComponent implements OnInit {

    horizontalStepperForm: UntypedFormGroup;
    configForm: UntypedFormGroup;

    /**
     * Constructor
     */
    constructor(private _formBuilder: UntypedFormBuilder,
         private _empowerConfirmationService: EmpowerConfirmationService,
         private matDialog: MatDialog
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Horizontal stepper form
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                natureProject: ['', Validators.required],
                prioritizationAndSequencing: ['', Validators.required],
                tdv: ['', Validators.required], // Added control for Tanzania Development Vision (TDV 2025)
                fydp: ['', Validators.required], // Added control for FYDP III
                sdg: ['', Validators.required],  // Added control for SDGs
                agenda_2063: ['', Validators.required], // Added control for Agenda 2063
              }),
              step2: this._formBuilder.group({
                projectScope: ['', Validators.required],
                projectGoal: ['', Validators.required],
                projectPurpose: ['', Validators.required],
                ProjectOutputs: ['', Validators.required],
                ProjectActivities: ['', Validators.required],
                ProjectInput: ['', Validators.required],
                objectiveVerifiable: ['', Validators.required],
                ImplementationPlan: ['', Validators.required],
                CompensationPAP: ['', Validators.required],
                CertificateRight: ['', Validators.required],
                ManagementInstitution: ['', Validators.required],
                IdentificationProjectImplementationTeam: ['', Validators.required],
              }),
              step3: this._formBuilder.group({
                technology: ['', Validators.required],
                Skills: ['', Validators.required],
                Availability: ['', Validators.required],
                Compliance: ['', Validators.required],
                facilitation: ['', Validators.required],
                scalability: ['', Validators.required],
                Maintenance: ['', Validators.required],
                CostAnalysis: ['', Validators.required]
              }),
            step4: this._formBuilder.group({
              ProjectDuration: ['', Validators.required]  // Added Project Duration field
            })
          });
          


        // Build the config form
        this.configForm = this._formBuilder.group({
            title: '323232332',
            message:
                'Are you sure you want to remove this project permanently? <span class="font-medium">This action cannot be undone!</span>',
            icon: this._formBuilder.group({
                show: true,
                name: 'heroicons_outline:exclamation-triangle',
                color: 'warn',
            }),
            actions: this._formBuilder.group({
                confirm: this._formBuilder.group({
                    show: true,
                    label: 'Print',
                    color: 'primary',
                }),
                cancel: this._formBuilder.group({
                    show: true,
                    label: 'Cancel',
                }),
            }),
            dismissible: true,
        });
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    /**
* Open confirmation dialog
*/
    openConfirmationDialog(): void {
        // Open the dialog and save the reference of it
        const dialogRef = this._empowerConfirmationService.open(
            this.configForm.value
        );

        // Subscribe to afterClosed from the dialog reference
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }

    reviewNPMIS() {
        this.matDialog.open(EmpowerAIReviewComponent, {
          autoFocus: false,
          panelClass: 'empower-confirmation-dialog-panel',
        });
      }

      highQualityLivelihood:any = false;
      goodGovernance:any = false;

      onTDVChange(event: MatSelectChange) {
        console.log('Selected options:', event.value);
        // Your logic here, for example:
        if (event.value.includes('High Quality Livelihood')) {
          console.log('High Quality Livelihood selected!');
          this.highQualityLivelihood = true
          // call another function or update UI
        }

        if (event.value.includes('Good Governance and the Rule of Law')) {
          console.log('Good Governance and the Rule of Law selected!');
          this.goodGovernance = true
          // call another function or update UI
        }
      }


      enhancingProductionProductivity:any = false

      onFYDPChange(event: MatSelectChange) {
        console.log('Selected options:', event.value);
        // Your logic here, for example:
        if (event.value.includes('Enhancing Production and Productivity')) {
          console.log('Enhancing Production and Productivity selected!');
          this.enhancingProductionProductivity = true
          // call another function or update UI
        }
      }
      
      endPoverty:any = false

      onSDGChange(event: MatSelectChange) {
        console.log('Selected options:', event.value);
        // Your logic here, for example:
        if (event.value.includes('End poverty in all its forms everywhere')) {
          console.log('End poverty in all its forms everywhere selected!');
          this.endPoverty = true
          // call another function or update UI
        }
      }

}