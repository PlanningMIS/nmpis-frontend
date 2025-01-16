import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EmpowerAlertComponent } from '@empower/components/alert';
import { EmpowerDrawerComponent, EmpowerDrawerMode } from '@empower/components/drawer';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { EmpowerComponentsComponent } from 'app/modules/admin/ui/empower-components/empower-components.component';

@Component({
    selector: 'drawer',
    templateUrl: './drawer.component.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        EmpowerAlertComponent,
        EmpowerHighlightComponent,
        MatTabsModule,
        EmpowerDrawerComponent,
    ],
})
export class DrawerComponent {
    drawerMode: EmpowerDrawerMode;
    drawerOpened: boolean;

    /**
     * Constructor
     */
    constructor(private _EmpowerComponentsComponent: EmpowerComponentsComponent) {
        // Set the defaults
        this.drawerMode = 'side';
        this.drawerOpened = true;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer mode
     */
    toggleDrawerMode(): void {
        this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';
    }

    /**
     * Toggle the drawer open
     */
    toggleDrawerOpen(): void {
        this.drawerOpened = !this.drawerOpened;
    }

    /**
     * Drawer opened changed
     *
     * @param opened
     */
    drawerOpenedChanged(opened: boolean): void {
        this.drawerOpened = opened;
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._EmpowerComponentsComponent.matDrawer.toggle();
    }
}
