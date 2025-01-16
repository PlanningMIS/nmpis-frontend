import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { EmpowerMasonryComponent } from '@empower/components/masonry';
import { EmpowerMediaWatcherService } from '@empower/services/media-watcher';
import { EmpowerComponentsComponent } from 'app/modules/admin/ui/empower-components/empower-components.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'masonry',
    templateUrl: './masonry.component.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        EmpowerHighlightComponent,
        MatTabsModule,
        EmpowerMasonryComponent,
    ],
})
export class MasonryComponent implements OnInit {
    columns: number = 4;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _EmpowerComponentsComponent: EmpowerComponentsComponent,
        private _empowerMediaWatcherService: EmpowerMediaWatcherService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to media changes
        this._empowerMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Set the masonry columns
                //
                // This if block structured in a way so that only the
                // biggest matching alias will be used to set the column
                // count.
                if (matchingAliases.includes('xl')) {
                    this.columns = 5;
                } else if (matchingAliases.includes('lg')) {
                    this.columns = 4;
                } else if (matchingAliases.includes('md')) {
                    this.columns = 3;
                } else if (matchingAliases.includes('sm')) {
                    this.columns = 2;
                } else {
                    this.columns = 1;
                }
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._EmpowerComponentsComponent.matDrawer.toggle();
    }
}
