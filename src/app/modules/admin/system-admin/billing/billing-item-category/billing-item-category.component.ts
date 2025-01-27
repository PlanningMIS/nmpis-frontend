import { DatePipe, NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { EmpowerConfirmationService } from '@empower/services/confirmation';
import { BillingItemCategoryDialog } from '../dialogs/billing-item-category/billing-item-category.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-billing-item-category',
 encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatMenuModule,
            MatOptionModule,
            MatSelectModule,
            MatDividerModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            NgClass,
            MatProgressBarModule,
            DatePipe,
            MatDatepickerModule
  ],
  templateUrl: './billing-item-category.component.html',
  styleUrl: './billing-item-category.component.scss'
})

export class BillingItemCategoryComponent implements OnInit, AfterViewInit, OnDestroy{
    readonly dialog = inject(MatDialog);

  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild('recentTransactionsTable', { read: MatSort })  

  recentTransactionsTableMatSort: MatSort;
  data: any;

  configForm: UntypedFormGroup;
    //TEMPORARY
  finance: any = {
    recentTransactions: [
        {
            id: '1b6fd296-bc6a-4d45-bf4f-e45519a58cf5',
            transactionId: '528651571NT',
            name: 'Airtel Money',
            gender: 'Mobile Money',
            status: 'completed',
            date: '2025-10-07T22:22:37.274Z',
        },
        {
            id: '2dec6074-98bd-4623-9526-6480e4776569',
            transactionId: '421436904YT',
            name: 'Mixx By Yas',
            gender: 'Mobile Money',
            status: 'completed',
            date: '2025-12-18T14:51:24.461Z',
        },
        {
            id: 'ae7c065f-4197-4021-a799-7a221822ad1d',
            transactionId: '685377421YT',
            name: 'M-Pesa',
            gender: 'Mobile Money',
            status: 'pending',
            date: '2025-12-25T17:52:14.304Z',
        },
        {
            id: '0c43dd40-74f6-49d5-848a-57a4a45772ab',
            transactionId: '884960091RT',
            name: 'NMB',
            gender: 'Bank',
            status: 'completed',
            date: '2025-11-29T06:32:16.111Z',
        },
        {
            id: 'e5c9f0ed-a64c-4bfe-a113-29f80b4e162c',
            transactionId: '361402213NT',
            name: 'CRDB',
            gender: 'Bank',
            status: 'completed',
            date: '2025-11-24T12:13:23.064Z',
        },
      
    ],
};


    recentTransactionsDataSource: MatTableDataSource<any> =
        new MatTableDataSource();
    recentTransactionsTableColumns: string[] = [
        'transactionId',
        'name',
        'date',
        'gender',
        'status',
    ];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

 
    filteredData: any[] = [];
    

    /**
     * Constructor
     */
    constructor(
        private router: Router,
        private _empowerConfirmationService: EmpowerConfirmationService,
        private _formBuilder: UntypedFormBuilder,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.data = this.finance;

        // Store the table data
        this.recentTransactionsDataSource.data =
            this.data.recentTransactions;

                // Build the config form
                this.configForm = this._formBuilder.group({
                    title: 'Remove ',
                    message:
                        'Are you sure you want to remove this permanently? <span class="font-medium">This action cannot be undone!</span>',
                    icon: this._formBuilder.group({
                        show: true,
                        name: 'heroicons_outline:exclamation-triangle',
                        color: 'warn',
                    }),
                    actions: this._formBuilder.group({
                        confirm: this._formBuilder.group({
                            show: true,
                            label: 'Delete',
                            color: 'warn',
                        }),
                        cancel: this._formBuilder.group({
                            show: true,
                            label: 'Cancel',
                        }),
                    }),
                    dismissible: true,
                });   
                
                //filter by date
                this.filteredData = this.finance; // Initially show all data

    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // Make the data source sortable
        this.recentTransactionsDataSource.sort =
            this.recentTransactionsTableMatSort;

        this.recentTransactionsDataSource.paginator = this._paginator;
    
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
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

                /**
                 * Open confirmation dialog
                 */
                openBillingCatItemDialog(): void {
                    // Open the dialog
                    this.dialog.open(BillingItemCategoryDialog, {
                        autoFocus: false,
                        panelClass: 'empower-confirmation-dialog-panel',
                    });
                } 

  
}