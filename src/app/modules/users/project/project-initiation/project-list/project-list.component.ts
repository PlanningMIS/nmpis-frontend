import { CommonModule, NgClass } from '@angular/common';
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
import { FormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmpowerAIComponent } from '@empower/services/ai/ai.component';
import { EmpowerSummaryComponent } from '@empower/services/ai/summary/summary.component';
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
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})

export class ProjectListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild('recentprojectsTable', { read: MatSort })

  // dialog = inject(MatDialog);

  recentprojectsTableMatSort: MatSort;
  recentProjectDataSource: MatTableDataSource<any> = new MatTableDataSource();
  configForm: UntypedFormGroup;

  data: any;
  sectors: any;
  selectedStatus: string | null = null; // Default value
  selectedSector: string | null = null; // Default value
  searchProjectName: string = ''; // Stores the input value
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
    private apisService: ApisService,
    private matDialog: MatDialog
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit(): void {

    this.getConceptNotes();

    // this.recentProjectDataSource.data = [
    //   {
    //     "project_id":"REF1001",
    //     "project_name": "Construction of Teachers (TSC) District Offices",
    //     "programme": "TP-001",
    //     "project_nature": "CONSTRUCTION",
    //     "project_description": "This is the description of Construction of Teachers Service Commission (TSC) District Offices ",
    //     "project_background": "This is the background of Construction of Teachers Service Commission (TSC) District Offices ",
    //     "exp_start_date": "2025-02-26",
    //     "exp_completion_date": "2030-02-26",
    //     "sector": "AG",
    //     "subsector": "AG001",
    //     "estimated_cost": 100000000,
    //     "lifespan": "5",
    //     "project_objective": "Objective of Construction of Teachers Service Commission (TSC) District Offices ",
    //     "costcentre": "[\"1002\", \"05\"]",
    //     "concept_note": "",
    //     "status":"",
    // }];


    this.getSectors();

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

  ngOnDestroy(): void { }

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

  onStatusChange(event: any) {
    console.log('Selected status:', event.value);
    this.apisService.get_private(`projects/conceptnote/?status=${event.value}`).then((response: any) => {
      console.log(">>>>>", response);
      this.data = response.data;
      this.recentProjectDataSource.data = this.data;
    }, error => {
      console.log('Error', error);
    }).catch(error => {
      console.log('Err', error);
    });
  }

  getSectors() {
    this.apisService.get_private('settings/sector').then((response: any) => {
      console.log(">>>>>", response);
      this.sectors = response.data;
    }, error => {
      console.log('Error', error);
    }).catch(error => {
      console.log('Err', error);
    });
  }

  onSectorSelected(event: any) {
    const selectedSectorId = event.value;
    // Your logic here to handle the selected sector
    console.log('Selected Sector ID:', selectedSectorId);
    this.apisService.get_private(`projects/conceptnote/?sector=${selectedSectorId}`).then((response: any) => {
      console.log(">>>>>", response);
      this.data = response.data;
      this.recentProjectDataSource.data = this.data;
    }, error => {
      console.log('Error', error);
    }).catch(error => {
      console.log('Err', error);
    });
  }

  resetFilter() {
    this.selectedStatus = null; // Resets the selection
    this.selectedSector = null; // Resets the selection
    this.searchProjectName = "";
    this.getConceptNotes();
  }

  onKeyPress() {
    console.log('Current Input:', this.searchProjectName);
    this.apisService.get_private(`projects/conceptnote/?project_name=${this.searchProjectName}`).then((response: any) => {
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

  evaluateConceptNote() {
    this.matDialog.open(EmpowerAIComponent, {
      autoFocus: false,
      panelClass: 'empower-confirmation-dialog-panel',
    });
  }

  summaryProject() {
    this.matDialog.open(EmpowerSummaryComponent, {
      autoFocus: false,
      panelClass: 'empower-confirmation-dialog-panel',
    });
  }

  viewInDetails(): void {
    this.router.navigate(['/apps/projects/project-details']);
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
