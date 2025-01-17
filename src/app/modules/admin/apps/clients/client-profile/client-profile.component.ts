import { TextFieldModule } from '@angular/cdk/text-field';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { empowerCardComponent } from '@empower/components/card';
import { Subject } from 'rxjs';
import { RequestingFacilityDialog } from '../dialog/requesting-facility/requesting-facility.component';
import { BillingInfoDialog } from '../dialog/billing-info/billing-info.component';

@Component({
    selector: 'app-client-profile',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        RouterLink,
        empowerCardComponent,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatDividerModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        NgClass,
        MatProgressBarModule,
        CurrencyPipe,
        DatePipe,
    ],
    templateUrl: './client-profile.component.html',
    styleUrl: './client-profile.component.scss',
})
export class ClientProfileComponent {
    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild('recentTransactionsTable', { read: MatSort })
    recentTransactionsTableMatSort: MatSort;
    data: any;

    readonly dialog = inject(MatDialog);


    //TEMPORARY
    finance: any = {
        recentTransactions: [
            {
                id: '1b6fd296-bc6a-4d45-bf4f-e45519a58cf5',
                transactionId: '528651571NT',
                name: 'Morgan Page',
                amount: +1358.75,
                status: 'completed',
                date: '2019-10-07T22:22:37.274Z',
            },
            {
                id: '2dec6074-98bd-4623-9526-6480e4776569',
                transactionId: '421436904YT',
                name: 'Nita Hebert',
                amount: -1042.82,
                status: 'completed',
                date: '2019-12-18T14:51:24.461Z',
            },
            {
                id: 'ae7c065f-4197-4021-a799-7a221822ad1d',
                transactionId: '685377421YT',
                name: 'Marsha Chambers',
                amount: +1828.16,
                status: 'pending',
                date: '2019-12-25T17:52:14.304Z',
            },
            {
                id: '0c43dd40-74f6-49d5-848a-57a4a45772ab',
                transactionId: '884960091RT',
                name: 'Charmaine Jackson',
                amount: +1647.55,
                status: 'completed',
                date: '2019-11-29T06:32:16.111Z',
            },
            {
                id: 'e5c9f0ed-a64c-4bfe-a113-29f80b4e162c',
                transactionId: '361402213NT',
                name: 'Maura Carey',
                amount: -927.43,
                status: 'completed',
                date: '2019-11-24T12:13:23.064Z',
            },
        ],
    };

    recentTransactionsDataSource: MatTableDataSource<any> =
        new MatTableDataSource();
    recentTransactionsTableColumns: string[] = [
        'transactionId',
        'date',
        'name',
        'amount',
        'status',
    ];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor() {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.data = this.finance;

        // Store the table data
        this.recentTransactionsDataSource.data = this.data.recentTransactions;
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
     * Open Requesting Fac dialog
     */
    addRequestingFac() {
        // Open the dialog
        this.dialog.open(RequestingFacilityDialog, {
            autoFocus: false,
            panelClass: 'empower-confirmation-dialog-panel',
        });
    }

        /**
     * Open Billing Info dialog
     */
        addBillingInfo() {
            // Open the dialog
            this.dialog.open(BillingInfoDialog, {
                autoFocus: false,
                panelClass: 'empower-confirmation-dialog-panel',
            });
        }


}
