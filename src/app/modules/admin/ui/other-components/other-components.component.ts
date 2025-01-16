import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import {
    EmpowerNavigationItem,
    EmpowerVerticalNavigationComponent,
} from '@empower/components/navigation';
import { EmpowerScrollResetDirective } from '@empower/directives/scroll-reset';
import { EmpowerMediaWatcherService } from '@empower/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'other-components',
    templateUrl: './other-components.component.html',
    styleUrls: ['./other-components.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatSidenavModule,
        EmpowerVerticalNavigationComponent,
        EmpowerScrollResetDirective,
        RouterOutlet,
    ],
})
export class OtherComponentsComponent implements OnInit, OnDestroy {
    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: EmpowerNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _empowerMediaWatcherService: EmpowerMediaWatcherService
    ) {
        this.menuData = [
            {
                id: 'other-components.common',
                title: 'Common',
                subtitle: 'Custom made high-level components',
                type: 'group',
                children: [
                    {
                        id: 'other-components.common.overview',
                        title: 'Overview',
                        type: 'basic',
                        link: '/ui/other-components/common/overview',
                    },
                    {
                        id: 'other-components.common.languages',
                        title: 'Languages',
                        type: 'basic',
                        link: '/ui/other-components/common/languages',
                    },
                    {
                        id: 'other-components.common.messages',
                        title: 'Messages',
                        type: 'basic',
                        link: '/ui/other-components/common/messages',
                    },
                    {
                        id: 'other-components.common.notifications',
                        title: 'Notifications',
                        type: 'basic',
                        link: '/ui/other-components/common/notifications',
                    },
                    {
                        id: 'other-components.common.quick-chat',
                        title: 'Quick chat',
                        type: 'basic',
                        link: '/ui/other-components/common/quick-chat',
                    },
                    {
                        id: 'other-components.common.search',
                        title: 'Search',
                        type: 'basic',
                        link: '/ui/other-components/common/search',
                    },
                    {
                        id: 'other-components.common.shortcuts',
                        title: 'Shortcuts',
                        type: 'basic',
                        link: '/ui/other-components/common/shortcuts',
                    },
                    {
                        id: 'other-components.common.user',
                        title: 'User',
                        type: 'basic',
                        link: '/ui/other-components/common/user',
                    },
                ],
            },
            {
                id: 'other-components.divider-1',
                type: 'divider',
            },
            {
                id: 'other-components.third-party',
                title: 'Third party',
                subtitle: 'Supported components',
                type: 'group',
                children: [
                    {
                        id: 'other-components.third-party.apex-charts',
                        title: 'ApexCharts',
                        type: 'basic',
                        link: '/ui/other-components/third-party/apex-charts',
                    },
                    {
                        id: 'other-components.third-party.quill-editor',
                        title: 'Quill editor',
                        type: 'basic',
                        link: '/ui/other-components/third-party/quill-editor',
                    },
                ],
            },
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to media query change
        this._empowerMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Set the drawerMode and drawerOpened
                if (matchingAliases.includes('md')) {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                } else {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
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
}
