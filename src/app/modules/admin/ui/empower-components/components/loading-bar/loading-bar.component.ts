import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
    MatSlideToggleChange,
    MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { EmpowerHighlightComponent } from '@empower/components/highlight';
import { EmpowerLoadingService } from '@empower/services/loading';
import { EmpowerComponentsComponent } from 'app/modules/admin/ui/empower-components/empower-components.component';
import { finalize } from 'rxjs';

@Component({
    selector: 'loading-bar',
    templateUrl: './loading-bar.component.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        EmpowerHighlightComponent,
        MatTabsModule,
        MatSlideToggleModule,
        MatSliderModule,
    ],
})
export class LoadingBarComponent {
    apiCallStatus: string = '-';
    mode: 'determinate' | 'indeterminate' = 'indeterminate';
    sliderValue: number = 0;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _EmpowerComponentsComponent: EmpowerComponentsComponent,
        private _empowerLoadingService: EmpowerLoadingService
    ) {}

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

    /**
     * Show the loading bar
     */
    showLoadingBar(): void {
        this._empowerLoadingService.show();
    }

    /**
     * Hide the loading bar
     */
    hideLoadingBar(): void {
        this._empowerLoadingService.hide();
    }

    /**
     * Set the auto mode
     *
     * @param change
     */
    setAutoMode(change: MatSlideToggleChange): void {
        this._empowerLoadingService.setAutoMode(change.checked);
    }

    /**
     * Make a fake API call
     */
    makeAPICall(): void {
        this.apiCallStatus = 'Waiting...';

        this._httpClient
            .get('https://jsonplaceholder.typicode.com/posts?_delay=2000')
            .pipe(
                finalize(() => {
                    this.apiCallStatus = 'Finished!';
                })
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    /**
     * Toggle the mode
     */
    toggleMode(): void {
        // Show the loading bar
        this._empowerLoadingService.show();

        // Set the mode
        this.mode =
            this.mode === 'indeterminate' ? 'determinate' : 'indeterminate';
        this._empowerLoadingService.setMode(this.mode);
    }

    /**
     * Set the progress
     */
    setProgress(): void {
        this._empowerLoadingService.setProgress(this.sliderValue);
    }
}
