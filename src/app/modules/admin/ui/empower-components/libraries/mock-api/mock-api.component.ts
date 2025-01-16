import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmpowerAlertComponent } from '@empower/components/alert';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { EmpowerComponentsComponent } from 'app/modules/admin/ui/empower-components/empower-components.component';

@Component({
    selector: 'mock-api',
    templateUrl: './mock-api.component.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        EmpowerAlertComponent,
        EmpowerHighlightComponent,
    ],
})
export class MockApiComponent {
    /**
     * Constructor
     */
    constructor(private _EmpowerComponentsComponent: EmpowerComponentsComponent) {}

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
