import { Injectable } from '@angular/core';
import { EmpowerMockApiService } from '@empower/lib/mock-api';
import { project as projectData } from 'app/mock-api/dashboards/project/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class ProjectMockApi {
    private _project: any = projectData;

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
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._empowerMockApiService
            .onGet('api/dashboards/project')
            .reply(() => [200, cloneDeep(this._project)]);
    }
}
