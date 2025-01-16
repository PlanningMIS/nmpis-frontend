import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { EmpowerAlertComponent } from '@empower/components/alert';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { GuidesComponent } from 'app/modules/admin/docs/guides/guides.component';

@Component({
    selector: 'theme-layouts',
    templateUrl: './theme-layouts.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        EmpowerAlertComponent,
        RouterLink,
        EmpowerHighlightComponent,
    ],
})
export class ThemeLayoutsComponent {
    /**
     * Constructor
     */
    constructor(private _guidesComponent: GuidesComponent) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._guidesComponent.matDrawer.toggle();
    }
}
