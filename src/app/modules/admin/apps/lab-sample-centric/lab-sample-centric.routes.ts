import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';
import { RejectedSampleComponent } from './rejected-sample/rejected-sample.component';
import { SampleAnalysisComponent } from './sample-analysis/sample-analysis.component';
import { SampleResultsComponent } from './sample-results/sample-results.component';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sample',
    },
    {
        path: 'sample',
        component: SampleCollectionComponent,
    },
    {
        path: 'rejected-sample',
        component: RejectedSampleComponent,
    },
    {
        path: 'sample-analysis',
        component: SampleAnalysisComponent,
    },
    {
        path: 'sample-results',
        component: SampleResultsComponent,
    },
] as Routes;
