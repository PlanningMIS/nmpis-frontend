import { CommonModule, NgClass } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApisService } from '@empower/services/api-service/apis.service';
import { EmpowerConfirmationService } from '@empower/services/confirmation';

@Component({
    selector: 'app-project-list',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        NgClass,
        MatProgressBarModule,
        CommonModule
    ],
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.scss',
})

export class ProjectListComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator) private _paginator: MatPaginator;
    @ViewChild('recentprojectsTable', { read: MatSort })

    recentprojectsTableMatSort: MatSort;
    recentProjectDataSource: MatTableDataSource<any> = new MatTableDataSource();
    configForm: UntypedFormGroup;

    data: any;
    filteredData: any[] = [];
    isLoading: boolean = false;
    recentprojectsTableColumns: string[] = [
        'projectId',
        'name',
        'project_nature',
        'sector',
        'amount',
        'status',
        'action',
    ];

    //TEMPORARY

    constructor(
        private router: Router,
        private _empowerConfirmationService: EmpowerConfirmationService,
        private _formBuilder: UntypedFormBuilder,
        private apisService: ApisService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    
    ngOnInit(): void {

        this.getConceptNotes();

        this.configForm = this._formBuilder.group({
            title: 'Remove Project',
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

        // this.filteredData = this.project;
    }

    ngAfterViewInit(): void {
        this.recentProjectDataSource.sort = this.recentprojectsTableMatSort;
        this.recentProjectDataSource.paginator = this._paginator;
    }

    ngOnDestroy(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    getConceptNotes() {
        this.apisService.get_private('projects/conceptnote/').then((response: any) => {
          console.log(">>>>>", response);
        this.data = response.data;
        this.recentProjectDataSource.data = this.data;
        }, error => {
          console.log('Error', error);
        }).catch(error => {
          console.log('Err', error);
        });
    }

    openConfirmationDialog(): void {
        const dialogRef = this._empowerConfirmationService.open(
            this.configForm.value
        );
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }

    gotoAddConceptNote(): void {
        this.router.navigate(['/apps/projects/add-concept-note']);
    }

    goToCriteriaAccessment(): void {
        this.router.navigate(['/apps/projects/criteria-accessment']);
      }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
