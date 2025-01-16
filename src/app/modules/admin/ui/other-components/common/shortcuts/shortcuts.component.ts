import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { OtherComponentsComponent } from 'app/modules/admin/ui/other-components/other-components.component';

@Component({
    selector: 'shortcuts',
    templateUrl: './shortcuts.component.html',
    standalone: true,
    imports: [MatIconModule, MatButtonModule, EmpowerHighlightComponent],
})
export class ShortcutsComponent {
    /**
     * Constructor
     */
    constructor(private _otherComponentsComponent: OtherComponentsComponent) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
