import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'clients',
    },
    {
        path: '',
        component: ClientsComponent,
    },
    {
        path: 'add-client',
        component: AddClientComponent,
    },
    {
        path: 'client-profile',
        component: ClientProfileComponent,
    },
] as Routes;
