import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { SampleCollectionComponent } from './sample-collection/sample-collection.component';
import { RejectedSampleComponent } from './rejected-sample/rejected-sample.component';
import { SampleAnalysisComponent } from './sample-analysis/sample-analysis.component';
import { SampleResultsComponent } from './sample-results/sample-results.component';
import { HistopathologyComponent } from './sample-analysis/histopathology/histopathology.component';
import { ParasitologyComponent } from './sample-analysis/parasitology/parasitology.component';
import { HaematologyComponent } from './sample-analysis/haematology/haematology.component';
import { ClinicalChemistryComponent } from './sample-analysis/clinical-chemistry/clinical-chemistry.component';

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
        path: 'histopathology',
        component: HistopathologyComponent,
    },
    {
        path: 'parasitology',
        component: ParasitologyComponent,
    },
    {
        path: 'haematology',
        component: HaematologyComponent,
    },
    {
        path: 'chemistry',
        component: ClinicalChemistryComponent,
    },
    {
        path: 'sample-results',
        component: SampleResultsComponent,
    },
] as Routes;
