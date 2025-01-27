import { CdkScrollable } from '@angular/cdk/scrolling';
import { I18nPluralPipe, NgClass, PercentPipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {
    MatSlideToggleChange,
    MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmpowerFindByKeyPipe } from '@empower/pipes/find-by-key/find-by-key.pipe';
import { AcademyService } from 'app/modules/admin/apps/academy/academy.service';
import { Course } from 'app/modules/admin/apps/academy/academy.types';
import { BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { CollectSampleDialog } from '../dialogs/collect-sample/collect-sample.component';


@Component({
  selector: 'app-sample-collection',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CdkScrollable,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        NgClass,
        MatTooltipModule,
        MatProgressBarModule,
        MatButtonModule,
        EmpowerFindByKeyPipe,
    ],
  templateUrl: './sample-collection.component.html',
  styleUrl: './sample-collection.component.scss'
})


export class SampleCollectionComponent implements OnInit, OnDestroy {

  readonly dialog = inject(MatDialog);

    //TEMPORARY
    courses: any = [
        {
            id: '694e4e5f-f25f-470b',
            title: 'Chandler Maddox',
            slug: 'basics-of-angular',
            description: 'Clinical History',
            category: 'unpaid',
            duration: 30,
            totalSteps: 11,
            updatedAt: 'Jun 28, 2021',
            featured: true,
            progress: {
                currentStep: 3,
                completed: 2,
            },
        },
        {
            id: 'f924007a-2ee9-470b',
            title: 'Bryant Horn',
            slug: 'basics-of-typeScript',
            description: 'Clinical History',
            category: 'paid',
            duration: 60,
            totalSteps: 11,
            updatedAt: 'Nov 01, 2021',
            featured: true,
            progress: {
                currentStep: 5,
                completed: 3,
            },
        },
        {
            id: 'fad2ab23-1011-4028',
            title: "Larry Chan",
            slug: 'manage-your-pivotal-unpaid-foundry-apps-using-apigee-Edge',
            description: 'Clinical History',
            category: 'paid',
            duration: 90,
            totalSteps: 11,
            updatedAt: 'Jun 24, 2021',
            featured: false,
            progress: {
                currentStep: 6,
                completed: 0,
            },
        },
        {
            id: 'c4bc107b-edc4-47a7',
            title: 'Tori Blanchard',
            slug: 'build-a-pwa-using-workbox',
            description: 'Clinical History',
            category: 'unpaid',
            duration: 120,
            totalSteps: 11,
            updatedAt: 'Nov 19, 2021',
            featured: false,
            progress: {
                currentStep: 0,
                completed: 0,
            },
        },
        {
            id: 'f05e08ab-f3e3-4597',
            title: 'Luna Fuentes',
            slug: 'building-a-grpc-service-with-java',
            description: 'Clinical History',
            category: 'paid',
            duration: 30,
            totalSteps: 11,
            updatedAt: 'Mar 13, 2021',
            featured: false,
            progress: {
                currentStep: 0,
                completed: 1,
            },
        },
        {
            id: '181728f4-87c8-45c5',
            title: 'Ambrose Santiago',
            slug: 'looking-at-campaign-finance-with-bigquery',
            description: 'Clinical History',
            category: 'unpaid',
            duration: 60,
            totalSteps: 11,
            updatedAt: 'Nov 01, 2021',
            featured: false,
            progress: {
                currentStep: 0,
                completed: 0,
            },
        },
        {
            id: '5213f6a1-1dd7-4b1d',
            title: 'Abram Savage',
            slug: 'customize-network-topology-with-subnetworks',
            description: 'Clinical History',
            category: 'paid',
            duration: 45,
            totalSteps: 11,
            updatedAt: 'May 12, 2021',
            featured: false,
            progress: {
                currentStep: 0,
                completed: 0,
            },
        },
        {
            id: '02992ac9-d1a3-4167',
            title: 'Alhassan Albashiri',
            slug: 'building-beautiful-uis-with-flutter',
            description:
                "Clinical History",
            category: 'paid',
            duration: 90,
            totalSteps: 11,
            updatedAt: 'Sep 18, 2021',
            featured: false,
            progress: {
                currentStep: 8,
                completed: 2,
            },
        },
        {
            id: '65e0a0e0-d8c0-4117',
            title: 'Emerie Marshall',
            slug: 'simulating-a-thread-network-using-openthread',
            description:
                'Clinical History',
            category: 'unpaid',
            duration: 45,
            totalSteps: 11,
            updatedAt: 'Jun 05, 2021',
            featured: false,
            progress: {
                currentStep: 0,
                completed: 0,
            },
        },
        {
            id: 'c202ebc9-9be3-433a',
            title: 'Alhassan Albashiri',
            slug: 'your-first-progressive-paid-app',
            description: 'Clinical History',
            category: 'paid',
            duration: 30,
            totalSteps: 11,
            updatedAt: 'Oct 14, 2021',
            featured: false,
            progress: {
                currentStep: 0,
                completed: 0,
            },
        },
        {
            id: '980ae7da-9f77-4e30',
            title: 'Alhassan Albashiri',
            slug: 'launch-unpaid-datalab',
            description: 'Clinical History',
            category: 'paid',
            duration: 60,
            totalSteps: 11,
            updatedAt: 'Dec 16, 2021',
            featured: false,
            progress: {
                currentStep: 0,
                completed: 0,
            },
        },
    ];

    categories = [
        {
            id: '9a67dff7-3c38-4052',
            title: 'Paid',
            slug: 'paid',
        },
        {
            id: '02f42092-bb23-4552',
            title: 'Unpaid',
            slug: 'unpaid',
        },
    ];

    filteredCourses: Course[];
    filters: {
        categorySlug$: BehaviorSubject<string>;
        query$: BehaviorSubject<string>;
    } = {
        categorySlug$: new BehaviorSubject('all'),
        query$: new BehaviorSubject(''),
    };

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _academyService: AcademyService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the categories

        // Get the courses
        this.filteredCourses = this.courses;

        // Filter the courses
        combineLatest([
            this.filters.categorySlug$,
            this.filters.query$,
        ]).subscribe(([categorySlug, query]) => {
            // Reset the filtered courses
            this.filteredCourses = this.courses;

            // Filter by category
            if (categorySlug !== 'all') {
                this.filteredCourses = this.filteredCourses.filter(
                    (course) => course.category === categorySlug
                );
            }

            // Filter by search query
            if (query !== '') {
                this.filteredCourses = this.filteredCourses.filter(
                    (course) =>
                        course.title
                            .toLowerCase()
                            .includes(query.toLowerCase()) ||
                        course.description
                            .toLowerCase()
                            .includes(query.toLowerCase()) ||
                        course.category
                            .toLowerCase()
                            .includes(query.toLowerCase())
                );
            }

        });
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
     * Filter by search query
     *
     * @param query
     */
    filterByQuery(query: string): void {
        this.filters.query$.next(query);
    }

    /**
     * Filter by category
     *
     * @param change
     */
    filterByCategory(change: MatSelectChange): void {
        this.filters.categorySlug$.next(change.value);
    }

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
    openRecollectDialog(): void {
        // Open the dialog
        this.dialog.open(CollectSampleDialog, {
            autoFocus: false,
            panelClass: 'empower-confirmation-dialog-panel',
        });
    }
}