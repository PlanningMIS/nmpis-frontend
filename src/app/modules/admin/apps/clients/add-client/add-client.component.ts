import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { EmpowerConfirmationService } from '@empower/services/confirmation';

@Component({
    selector: 'app-add-client',
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
    ],
    providers: [provideNativeDateAdapter()],
    templateUrl: './add-client.component.html',
    styleUrl: './add-client.component.scss'
})
export class AddClientComponent implements OnInit {

    horizontalStepperForm: UntypedFormGroup;
    configForm: UntypedFormGroup;

    // Set maxDate to the current date to limit the future dates
    maxDate = new Date();

    dobUnknown: any = false;
    clientAge: any;
    idCardPresent: any = false;
    isNextKinPresent: any;

    /**
     * Constructor
     */
    constructor(private _formBuilder: UntypedFormBuilder, private _empowerConfirmationService: EmpowerConfirmationService,
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
                firstName: ['', Validators.required],
                middleName: ['', Validators.required],
                lastName: ['', Validators.required],
                dob: [null],
                age: [null],
                maritalStatus: [null],
                occupation: [null],
                cardId: [null],
                idNumber: [null],
                // age: [null, [Validators.pattern(/^[0-9]*$/), this.ageValidator]],
            }),
            step2: this._formBuilder.group({
                location: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                landmarkDescription: [''],
                kinFirstName: [''],
                kinLastName: [''],
                kinRelationship: [''],
                kinPhoneNumber: [''],
                chairNames: ['', Validators.required],
                chairPhoneNumber: ['', Validators.required],
            }),
        });


        // Build the config form
        this.configForm = this._formBuilder.group({
            title: '323232332',
            message:
                'Are you sure you want to remove this client permanently? <span class="font-medium">This action cannot be undone!</span>',
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
     * onDateChange function
     */


    onDateChange(event: any) {
        if (event.value) {
            const birthDate = event.value;
            const today = new Date();

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            // Adjust for negative values in months and days
            if (months < 0 || (months === 0 && days < 0)) {
                years--;
                months += 12;
            }

            if (days < 0) {
                // Calculate the number of days in the previous month
                const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                days = daysInPreviousMonth + days;
                months--;

                if (months < 0) {
                    years--;
                    months = 11;
                }
            }

            let age;

            if (years === 0) {
                this.clientAge = `${months} months`
                // age = `${months} months`
            }

            if (months === 0) {
                this.clientAge = `${days} days`
                // age = `${days} days`
            }

            if (years > 0) {
                this.clientAge = `${years} years`
                // age = `${years} years`
            }

        }
    }

    unknownDob() {
        this.dobUnknown = !this.dobUnknown;

        if (this.dobUnknown) {
            this.horizontalStepperForm.get('dob')?.patchValue('');
            this.horizontalStepperForm.get('dob')?.setErrors(null);
            this.clientAge = ""
            // this.addClientForm.patchValue({
        } else {
            this.horizontalStepperForm.get('age')?.patchValue(null);
            this.horizontalStepperForm.get('age')?.setErrors(null);
        }
    }

    // Custom validator function
    ageValidator(control: FormControl) {
        const age = control.value;
        if (age !== null && (isNaN(age) || age < 0 || age > 120)) {
            return { invalidAge: true };
        }
        return null;
    }

    checkAgeAbove120(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const inputValue = inputElement.value;
        setTimeout(() => {
            if (+inputValue > 120) {
                inputElement.value = inputValue.slice(0, 2);
                this.horizontalStepperForm.patchValue({ age: inputElement.value });
            }
        }, 1000);
    }

    // Method triggered on selection change
    onSelectionChange(event: any): void {
        if (event.value) {
            this.idCardPresent = true;
            console.log('Selected value:', event.value); // Debugging/logging
        }
    }

    nextKinPresent(event: any) {
        if (event.value === "yes") {
            this.isNextKinPresent = true
        } else {
            this.isNextKinPresent = false
        }
    }


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

}
