import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { NurseComponent } from './nurse/nurse.component';
import { DoctorComponent } from './doctor/doctor.component';
import { NurseServiceComponent } from './nurse/nurse-service/nurse-service.component';
import { DoctorServiceComponent } from './doctor/doctor-service/doctor-service.component';


export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'nurse',
    },
    {
        path: 'nurse',
        component: NurseComponent,
    },
    {
        path: 'nurse-service',
        component: NurseServiceComponent,
    },
    {
        path: 'doctor',
        component: DoctorComponent,
    },
    {
        path: 'doctor-service',
        component: DoctorServiceComponent,
    },
] as Routes;
