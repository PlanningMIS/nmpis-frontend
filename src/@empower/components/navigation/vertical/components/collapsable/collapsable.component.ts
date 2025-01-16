import { BooleanInput } from '@angular/cdk/coercion';
import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    forwardRef,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router } from '@angular/router';
import { empowerAnimations } from '@empower/animations';
import { EmpowerNavigationService } from '@empower/components/navigation/navigation.service';
import { EmpowerNavigationItem } from '@empower/components/navigation/navigation.types';
import { EmpowerVerticalNavigationBasicItemComponent } from '@empower/components/navigation/vertical/components/basic/basic.component';
import { EmpowerVerticalNavigationDividerItemComponent } from '@empower/components/navigation/vertical/components/divider/divider.component';
import { EmpowerVerticalNavigationGroupItemComponent } from '@empower/components/navigation/vertical/components/group/group.component';
import { EmpowerVerticalNavigationSpacerItemComponent } from '@empower/components/navigation/vertical/components/spacer/spacer.component';
import { EmpowerVerticalNavigationComponent } from '@empower/components/navigation/vertical/vertical.component';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
    selector: 'empower-vertical-navigation-collapsable-item',
    templateUrl: './collapsable.component.html',
    animations: empowerAnimations,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatTooltipModule,
        MatIconModule,
        EmpowerVerticalNavigationBasicItemComponent,
        forwardRef(() => EmpowerVerticalNavigationCollapsableItemComponent),
        EmpowerVerticalNavigationDividerItemComponent,
        EmpowerVerticalNavigationGroupItemComponent,
        EmpowerVerticalNavigationSpacerItemComponent,
    ],
})
export class EmpowerVerticalNavigationCollapsableItemComponent
    implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _router = inject(Router);
    private _empowerNavigationService = inject(EmpowerNavigationService);

    @Input() autoCollapse: boolean;
    @Input() item: EmpowerNavigationItem;
    @Input() name: string;

    isCollapsed: boolean = true;
    isExpanded: boolean = false;
    private _empowerVerticalNavigationComponent: EmpowerVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any {
        /* eslint-disable @typescript-eslint/naming-convention */
        return {
            'empower-vertical-navigation-item-collapsed': this.isCollapsed,
            'empower-vertical-navigation-item-expanded': this.isExpanded,
        };
        /* eslint-enable @typescript-eslint/naming-convention */
    }

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

        // If the item has a children that has a matching url with the current url, expand...
        if (this._hasActiveChild(this.item, this._router.url)) {
            this.expand();
        }
        // Otherwise...
        else {
            // If the autoCollapse is on, collapse...
            if (this.autoCollapse) {
                this.collapse();
            }
        }

        // Listen for the onCollapsableItemCollapsed from the service
        this._empowerVerticalNavigationComponent.onCollapsableItemCollapsed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((collapsedItem) => {
                // Check if the collapsed item is null
                if (collapsedItem === null) {
                    return;
                }

                // Collapse if this is a children of the collapsed item
                if (this._isChildrenOf(collapsedItem, this.item)) {
                    this.collapse();
                }
            });

        // Listen for the onCollapsableItemExpanded from the service if the autoCollapse is on
        if (this.autoCollapse) {
            this._empowerVerticalNavigationComponent.onCollapsableItemExpanded
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((expandedItem) => {
                    // Check if the expanded item is null
                    if (expandedItem === null) {
                        return;
                    }

                    // Check if this is a parent of the expanded item
                    if (this._isChildrenOf(this.item, expandedItem)) {
                        return;
                    }

                    // Check if this has a children with a matching url with the current active url
                    if (this._hasActiveChild(this.item, this._router.url)) {
                        return;
                    }

                    // Check if this is the expanded item
                    if (this.item === expandedItem) {
                        return;
                    }

                    // If none of the above conditions are matched, collapse this item
                    this.collapse();
                });
        }

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
                // If the item has a children that has a matching url with the current url, expand...
                if (this._hasActiveChild(this.item, event.urlAfterRedirects)) {
                    this.expand();
                }
                // Otherwise...
                else {
                    // If the autoCollapse is on, collapse...
                    if (this.autoCollapse) {
                        this.collapse();
                    }
                }
            });

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
     * Collapse
     */
    collapse(): void {
        // Return if the item is disabled
        if (this.item.disabled) {
            return;
        }

        // Return if the item is already collapsed
        if (this.isCollapsed) {
            return;
        }

        // Collapse it
        this.isCollapsed = true;
        this.isExpanded = !this.isCollapsed;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this._empowerVerticalNavigationComponent.onCollapsableItemCollapsed.next(
            this.item
        );
    }

    /**
     * Expand
     */
    expand(): void {
        // Return if the item is disabled
        if (this.item.disabled) {
            return;
        }

        // Return if the item is already expanded
        if (!this.isCollapsed) {
            return;
        }

        // Expand it
        this.isCollapsed = false;
        this.isExpanded = !this.isCollapsed;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this._empowerVerticalNavigationComponent.onCollapsableItemExpanded.next(
            this.item
        );
    }

    /**
     * Toggle collapsable
     */
    toggleCollapsable(): void {
        // Toggle collapse/expand
        if (this.isCollapsed) {
            this.expand();
        } else {
            this.collapse();
        }
    }

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
     * Check if this is a children
     * of the given item
     *
     * @param parent
     * @param item
     * @private
     */
    private _isChildrenOf(
        parent: EmpowerNavigationItem,
        item: EmpowerNavigationItem
    ): boolean {
        const children = parent.children;

        if (!children) {
            return false;
        }

        if (children.indexOf(item) > -1) {
            return true;
        }

        for (const child of children) {
            if (child.children) {
                if (this._isChildrenOf(child, item)) {
                    return true;
                }
            }
        }

        return false;
    }
}
