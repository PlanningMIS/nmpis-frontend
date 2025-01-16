import { BooleanInput } from '@angular/cdk/coercion';
import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    forwardRef,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EmpowerNavigationService } from '@empower/components/navigation/navigation.service';
import { EmpowerNavigationItem } from '@empower/components/navigation/navigation.types';
import { EmpowerVerticalNavigationBasicItemComponent } from '@empower/components/navigation/vertical/components/basic/basic.component';
import { EmpowerVerticalNavigationCollapsableItemComponent } from '@empower/components/navigation/vertical/components/collapsable/collapsable.component';
import { EmpowerVerticalNavigationDividerItemComponent } from '@empower/components/navigation/vertical/components/divider/divider.component';
import { EmpowerVerticalNavigationSpacerItemComponent } from '@empower/components/navigation/vertical/components/spacer/spacer.component';
import { EmpowerVerticalNavigationComponent } from '@empower/components/navigation/vertical/vertical.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'empower-vertical-navigation-group-item',
    templateUrl: './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatIconModule,
        EmpowerVerticalNavigationBasicItemComponent,
        EmpowerVerticalNavigationCollapsableItemComponent,
        EmpowerVerticalNavigationDividerItemComponent,
        forwardRef(() => EmpowerVerticalNavigationGroupItemComponent),
        EmpowerVerticalNavigationSpacerItemComponent,
    ],
})
export class EmpowerVerticalNavigationGroupItemComponent
    implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _empowerNavigationService = inject(EmpowerNavigationService);

    @Input() autoCollapse: boolean;
    @Input() item: EmpowerNavigationItem;
    @Input() name: string;

    private _empowerVerticalNavigationComponent: EmpowerVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the parent navigation component
        this._empowerVerticalNavigationComponent =
            this._empowerNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._empowerVerticalNavigationComponent.onRefreshed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
