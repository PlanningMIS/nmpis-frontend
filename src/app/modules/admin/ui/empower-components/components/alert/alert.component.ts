import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EmpowerAlertComponent, EmpowerAlertService } from '@empower/components/alert';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { EmpowerComponentsComponent } from 'app/modules/admin/ui/empower-components/empower-components.component';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styles: [
        `
            empower-alert {
                margin: 16px 0;
            }
        `,
    ],
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        EmpowerHighlightComponent,
        MatTabsModule,
        EmpowerAlertComponent,
    ],
})
export class AlertComponent {
    /**
     * Constructor
     */
    constructor(
        private _empowerAlertService: EmpowerAlertService,
        private _EmpowerComponentsComponent: EmpowerComponentsComponent
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void {
        // Dismiss
        this._empowerAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void {
        // Show
        this._empowerAlertService.show(name);
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._EmpowerComponentsComponent.matDrawer.toggle();
    }
}
