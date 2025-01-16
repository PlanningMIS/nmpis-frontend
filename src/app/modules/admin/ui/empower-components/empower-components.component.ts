import {
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
    selector: 'empower-components',
    templateUrl: './empower-components.component.html',
    styleUrls: ['./empower-components.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatSidenavModule,
        EmpowerVerticalNavigationComponent,
        EmpowerScrollResetDirective,
        RouterOutlet,
    ],
})
export class EmpowerComponentsComponent implements OnInit, OnDestroy {
    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: EmpowerNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _empowerMediaWatcherService: EmpowerMediaWatcherService) {
        this.menuData = [
            {
                id: 'empower-components.libraries',
                title: 'Libraries',
                type: 'group',
                children: [
                    {
                        id: 'empower-components.libraries.mock-api',
                        title: 'MockAPI',
                        type: 'basic',
                        link: '/ui/empower-components/libraries/mock-api',
                    },
                ],
            },
            {
                id: 'empower-components.components',
                title: 'Components',
                type: 'group',
                children: [
                    {
                        id: 'empower-components.components.alert',
                        title: 'Alert',
                        type: 'basic',
                        link: '/ui/empower-components/components/alert',
                    },
                    {
                        id: 'empower-components.components.card',
                        title: 'Card',
                        type: 'basic',
                        link: '/ui/empower-components/components/card',
                    },
                    {
                        id: 'empower-components.components.drawer',
                        title: 'Drawer',
                        type: 'basic',
                        link: '/ui/empower-components/components/drawer',
                    },
                    {
                        id: 'empower-components.components.fullscreen',
                        title: 'Fullscreen',
                        type: 'basic',
                        link: '/ui/empower-components/components/fullscreen',
                    },
                    {
                        id: 'empower-components.components.highlight',
                        title: 'Highlight',
                        type: 'basic',
                        link: '/ui/empower-components/components/highlight',
                    },
                    {
                        id: 'empower-components.components.loading-bar',
                        title: 'Loading Bar',
                        type: 'basic',
                        link: '/ui/empower-components/components/loading-bar',
                    },
                    {
                        id: 'empower-components.components.masonry',
                        title: 'Masonry',
                        type: 'basic',
                        link: '/ui/empower-components/components/masonry',
                    },
                    {
                        id: 'empower-components.components.navigation',
                        title: 'Navigation',
                        type: 'basic',
                        link: '/ui/empower-components/components/navigation',
                    },
                ],
            },
            {
                id: 'empower-components.directives',
                title: 'Directives',
                type: 'group',
                children: [
                    {
                        id: 'empower-components.directives.scrollbar',
                        title: 'Scrollbar',
                        type: 'basic',
                        link: '/ui/empower-components/directives/scrollbar',
                    },
                    {
                        id: 'empower-components.directives.scroll-reset',
                        title: 'ScrollReset',
                        type: 'basic',
                        link: '/ui/empower-components/directives/scroll-reset',
                    },
                ],
            },
            {
                id: 'empower-components.services',
                title: 'Services',
                type: 'group',
                children: [
                    {
                        id: 'empower-components.services.config',
                        title: 'Config',
                        type: 'basic',
                        link: '/ui/empower-components/services/config',
                    },
                    {
                        id: 'empower-components.services.confirmation',
                        title: 'Confirmation',
                        type: 'basic',
                        link: '/ui/empower-components/services/confirmation',
                    },
                    {
                        id: 'empower-components.services.splash-screen',
                        title: 'SplashScreen',
                        type: 'basic',
                        link: '/ui/empower-components/services/splash-screen',
                    },
                    {
                        id: 'empower-components.services.media-watcher',
                        title: 'MediaWatcher',
                        type: 'basic',
                        link: '/ui/empower-components/services/media-watcher',
                    },
                ],
            },
            {
                id: 'empower-components.pipes',
                title: 'Pipes',
                type: 'group',
                children: [
                    {
                        id: 'empower-components.pipes.find-by-key',
                        title: 'FindByKey',
                        type: 'basic',
                        link: '/ui/empower-components/pipes/find-by-key',
                    },
                ],
            },
            {
                id: 'empower-components.validators',
                title: 'Validators',
                type: 'group',
                children: [
                    {
                        id: 'empower-components.validators.must-match',
                        title: 'MustMatch',
                        type: 'basic',
                        link: '/ui/empower-components/validators/must-match',
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
