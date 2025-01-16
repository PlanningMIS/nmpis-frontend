import { Injectable } from '@angular/core';
import { EmpowerNavigationItem } from '@empower/components/navigation';
import { EmpowerMockApiService } from '@empower/lib/mock-api';
import {
    defaultNavigation,
} from 'app/mock-api/common/navigation/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class NavigationMockApi {
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
            // Return the response
            return [
                200,
                {
                    default: cloneDeep(this._defaultNavigation),
                },
            ];
        });
    }
}
