import { CommonModule, formatDate, Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { CapitalizeFirstLetterDirective } from '@empower/directives/capitalize-first-letter.directive';
import { NumericFormatDirective } from '@empower/directives/numeric-format.directive';
import { OnlyNumbersDirective } from '@empower/directives/only-numbers.directive';
import { UppercaseDirective } from '@empower/directives/uppercase.directive';
import { ApisService } from '@empower/services/api-service/apis.service';
import { EmpowerConfirmationService } from '@empower/services/confirmation';
import { EmpowerUtilsService } from '@empower/services/utils';

@Component({
    selector: 'app-concept-note',
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
        UppercaseDirective,
        CapitalizeFirstLetterDirective,
        OnlyNumbersDirective,
        NumericFormatDirective,
    ],
    templateUrl: './concept-note.component.html',
    styleUrl: './concept-note.component.scss',
})
export class ConceptNoteComponent implements OnInit {
    configForm: UntypedFormGroup;
    configErrorForm: UntypedFormGroup;
    conceptNoteForm: FormGroup;
    selectedFile: File | null = null;
    yearDifference: number | null = null;

    costCenters: any;
    sectors: any;
    programmes: any;
    projectNature: any;

    subsectors: any;

    constructor(
        private _formBuilder: FormBuilder,
        private _empowerConfirmationService: EmpowerConfirmationService,
        private location: Location,
        private empowerUtilsService: EmpowerUtilsService,
        private apisService: ApisService,
        private router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {

        this.conceptNoteForm = this._formBuilder.group({
            project_name: ['', Validators.required],
            programme: [''],
            project_nature: ['', Validators.required],
            project_description: [
                '',
                [Validators.required, Validators.minLength(20)],
            ],
            project_background: [
                '',
                [Validators.required, Validators.minLength(20)],
            ],
            exp_start_date: ['', Validators.required],
            exp_completion_date: ['', Validators.required],
            sector: ['', Validators.required],
            subsector: ['', Validators.required],
            estimated_cost: ['', Validators.required],
            lifespan: ['', Validators.required],
            project_objective: [
                '',
                [Validators.required, Validators.minLength(20)],
            ],
            costcentre: ['', Validators.required],
            concept_note: [''],
        });

        this.getProgrammes();
        this.getProjectNature();
        this.getSectors();
        this.getCostCenters();

        // Build the config form
        this.configForm = this._formBuilder.group({
            title: 'SUCCESS',
            message:
                '<span class="font-medium">Concept note added successfully!</span>',
            icon: this._formBuilder.group({
                show: true,
                name: 'heroicons_solid:check',
                color: 'success',
            }),
            actions: this._formBuilder.group({
                confirm: this._formBuilder.group({
                    show: true,
                    label: 'OKAY',
                    color: 'primary',
                }),
                cancel: this._formBuilder.group({
                    show: true,
                    label: 'Cancel',
                }),
            }),
            dismissible: false,
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    getCostCenters() {
        this.apisService
            .get_private('settings/costcentre/')
            .then(
                (response: any) => {
                    console.log('cost center>>>>>', response);
                    this.costCenters = response.data;
                },
                (error) => {
                    console.log('Error', error);
                }
            )
            .catch((error) => {
                console.log('Err', error);
            });
    }

    getSectors() {
        this.apisService
            .get_private('settings/sector')
            .then(
                (response: any) => {
                    console.log('>>>>>', response);
                    this.sectors = response.data;
                },
                (error) => {
                    console.log('Error', error);
                }
            )
            .catch((error) => {
                console.log('Err', error);
            });
    }

    onSectorSelected(event: any) {
        const selectedSectorId = event.value;
        // Your logic here to handle the selected sector
        console.log('Selected Sector ID:', selectedSectorId);
        this.getSubSectors(selectedSectorId);
    }

    getSubSectors(id: string) {
        this.apisService
            .get_private(`settings/sector/detail/${id}`)
            .then(
                (response: any) => {
                    console.log('>>>>>', response);
                    this.subsectors = response.data.subsectors;
                },
                (error) => {
                    console.log('Error', error);
                }
            )
            .catch((error) => {
                console.log('Err', error);
            });
    }

    getProgrammes() {
        this.apisService
            .get_private('settings/programme/')
            .then(
                (response: any) => {
                    console.log('>>>>>', response);
                    this.programmes = response.data;
                },
                (error) => {
                    console.log('Error', error);
                }
            )
            .catch((error) => {
                console.log('Err', error);
            });
    }

    getProjectNature() {
        this.apisService
            .get_private('settings/projectnature/')
            .then(
                (response: any) => {
                    console.log('>>>>>', response);
                    this.projectNature = response.data;
                },
                (error) => {
                    console.log('Error', error);
                }
            )
            .catch((error) => {
                console.log('Err', error);
            });
    }

    openConfirmationAlert(): void {
        const dialogRef = this._empowerConfirmationService.openAlert(
            this.configForm.value
        );
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
            this.router.navigateByUrl('/apps/projects/list');
        });

        setTimeout(() => {
            dialogRef.close();
            this.router.navigateByUrl('/apps/projects/list');
        }, 2000);
    }

    openErrorAlert(): void {
        const dialogRef = this._empowerConfirmationService.openAlert(
            this.configErrorForm.value
        );
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }

    onFileSelected(event: any) {
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
        }
    }

    removeAttachment() {
        this.selectedFile = null;
    }

    uploadFile() {
        if (this.selectedFile) {
            console.log('File ready for upload:', this.selectedFile.name);
            // Handle file upload logic here (e.g., send to backend)
        }
    }

    onClose() {
        console.log('Close button clicked!');
        this.location.back(); // Moves back to the previous page
    }

    calculateYearDifference() {
        const startDate = this.conceptNoteForm.get('ExpectedStartDate')?.value;
        const completionDate = this.conceptNoteForm.get(
            'ExpectedCompletionDate'
        )?.value;

        const yearDifference = this.empowerUtilsService.calculateYearDifference(
            startDate,
            completionDate
        );

        // Ensure the completion date is after the start date
        if (yearDifference >= 0) {
            this.conceptNoteForm.patchValue({
                ProjectLifeSpan: yearDifference,
            });
        } else {
            // Reset if invalid
            this.conceptNoteForm.patchValue({ ProjectLifeSpan: '' });
        }
    }

    saveChange() {

        this.conceptNoteForm.value.exp_start_date = formatDate(
            this.conceptNoteForm.value.exp_start_date,
            'yyyy-MM-dd',
            'en'
        );

        this.conceptNoteForm.value.exp_completion_date = formatDate(
            this.conceptNoteForm.value.exp_completion_date,
            'yyyy-MM-dd',
            'en'
        );

        this.apisService
            .post_private(
                'projects/conceptnote/create',
                this.conceptNoteForm.value
            )
            .then((data: any) => {
                //   if (data && data.status && data.status == 200 && data.data) {
                //     console.log(data);
                //   }
                console.log(data);
                this.openConfirmationAlert();
            })
            .catch((error) => {

                // Build the config form
                this.configErrorForm = this._formBuilder.group({
                    title: `ERROR ${error.error.status_code}`,
                    message:
                        `<span class="font-medium">${error.error.message}, CONCEPT NOTE NOT SAVED!</span>`,
                    icon: this._formBuilder.group({
                        show: true,
                        name: 'heroicons_solid:exclamation-triangle',
                        color: 'error',
                    }),
                    actions: this._formBuilder.group({
                        confirm: this._formBuilder.group({
                            show: true,
                            label: 'OKAY',
                            color: 'primary',
                        }),
                        cancel: this._formBuilder.group({
                            show: true,
                            label: 'Cancel',
                        }),
                    }),
                    dismissible: true,
                });

                this.openErrorAlert();
            });
    }
}
