import { BooleanInput } from '@angular/cdk/coercion';
import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router } from '@angular/router';
import { EmpowerNavigationService } from '@empower/components/navigation/navigation.service';
import { EmpowerNavigationItem } from '@empower/components/navigation/navigation.types';
import { EmpowerVerticalNavigationBasicItemComponent } from '@empower/components/navigation/vertical/components/basic/basic.component';
import { EmpowerVerticalNavigationCollapsableItemComponent } from '@empower/components/navigation/vertical/components/collapsable/collapsable.component';
import { EmpowerVerticalNavigationDividerItemComponent } from '@empower/components/navigation/vertical/components/divider/divider.component';
import { EmpowerVerticalNavigationGroupItemComponent } from '@empower/components/navigation/vertical/components/group/group.component';
import { EmpowerVerticalNavigationSpacerItemComponent } from '@empower/components/navigation/vertical/components/spacer/spacer.component';
import { EmpowerVerticalNavigationComponent } from '@empower/components/navigation/vertical/vertical.component';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
    selector: 'empower-vertical-navigation-aside-item',
    templateUrl: './aside.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatTooltipModule,
        MatIconModule,
        EmpowerVerticalNavigationBasicItemComponent,
        EmpowerVerticalNavigationCollapsableItemComponent,
        EmpowerVerticalNavigationDividerItemComponent,
        EmpowerVerticalNavigationGroupItemComponent,
        EmpowerVerticalNavigationSpacerItemComponent,
    ],
})
export class EmpowerVerticalNavigationAsideItemComponent
    implements OnChanges, OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    static ngAcceptInputType_skipChildren: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _router = inject(Router);
    private _empowerNavigationService = inject(EmpowerNavigationService);

    @Input() activeItemId: string;
    @Input() autoCollapse: boolean;
    @Input() item: EmpowerNavigationItem;
    @Input() name: string;
    @Input() skipChildren: boolean;

    active: boolean = false;
    private _empowerVerticalNavigationComponent: EmpowerVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        // Active item id
        if ('activeItemId' in changes) {
            // Mark if active
            this._markIfActive(this._router.url);
        }
    }

    /**
     * On init
     */
    ngOnInit(): void {
        // Mark if active
        this._markIfActive(this._router.url);

        // Attach a listener to the NavigationEnd event
        this._router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd
                ),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((event: NavigationEnd) => {
                // Mark if active
                this._markIfActive(event.urlAfterRedirects);
            });

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

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check if the given item has the given url
     * in one of its children
     *
     * @param item
     * @param currentUrl
     * @private
     */
    private _hasActiveChild(
        item: EmpowerNavigationItem,
        currentUrl: string
    ): boolean {
        const children = item.children;

        if (!children) {
            return false;
        }

        for (const child of children) {
            if (child.children) {
                if (this._hasActiveChild(child, currentUrl)) {
                    return true;
                }
            }

            // Skip items other than 'basic'
            if (child.type !== 'basic') {
                continue;
            }

            // Check if the child has a link and is active
            if (
                child.link &&
                this._router.isActive(child.link, child.exactMatch || false)
            ) {
                return true;
            }
        }

        return false;
    }

    /**
     * Decide and mark if the item is active
     *
     * @private
     */
    private _markIfActive(currentUrl: string): void {
        // Check if the activeItemId is equals to this item id
        this.active = this.activeItemId === this.item.id;

        // If the aside has a children that is active,
        // always mark it as active
        if (this._hasActiveChild(this.item, currentUrl)) {
            this.active = true;
        }

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }
}
