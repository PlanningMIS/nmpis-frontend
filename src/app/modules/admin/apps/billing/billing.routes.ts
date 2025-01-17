import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { BillingComponent } from './billing.component';


export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'billing',
    },
    {
        path: '',
        component: BillingComponent,
    },
] as Routes;
