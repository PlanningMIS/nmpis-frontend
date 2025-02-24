import { Injectable } from '@angular/core';
import { EmpowerNavigationItem } from '@empower/components/navigation';
import { EmpowerMockApiService } from '@empower/lib/mock-api';
import {
    compactNavigation,
    defaultNavigation,
} from 'app/mock-api/common/navigation/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class NavigationMockApi {
    private readonly _compactNavigation: EmpowerNavigationItem[] =
    compactNavigation;

    private readonly _defaultNavigation: EmpowerNavigationItem[] =
        defaultNavigation;

    /**
     * Constructor
     */
    constructor(private _empowerMockApiService: EmpowerMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._empowerMockApiService.onGet('api/common/navigation').reply(() => {
            // Fill compact navigation children using the default navigation
            this._compactNavigation.forEach((compactNavItem) => {
                this._defaultNavigation.forEach((defaultNavItem) => {
                    if (defaultNavItem.id === compactNavItem.id) {
                        compactNavItem.children = cloneDeep(
                            defaultNavItem.children
                        );
                    }
                });
            });

            // Return the response
            return [
                200,
                {
                    compact: cloneDeep(this._compactNavigation),
                    default: cloneDeep(this._defaultNavigation),
                },
            ];
        });
    }
}
