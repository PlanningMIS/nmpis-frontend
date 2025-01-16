import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { empowerCardComponent } from '@empower/components/card';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { EmpowerComponentsComponent } from 'app/modules/admin/ui/empower-components/empower-components.component';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        EmpowerHighlightComponent,
        MatTabsModule,
        empowerCardComponent,
    ],
})
export class CardComponent {
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
