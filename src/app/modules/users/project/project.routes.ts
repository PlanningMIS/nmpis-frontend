import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-initiation/project-list/project-list.component';
import { ConceptNoteComponent } from './project-initiation/concept-note/concept-note.component';
import { CriteriaAccessmentComponent } from './project-initiation/project-list/criteria-accessment/criteria-accessment.component';

export default [
//     {
//         path: '',
//         pathMatch: 'full',
//         redirectTo: 'projects',
//     },
    {
        path: 'list',
        component: ProjectListComponent,
    },
    {
        path: 'criteria-accessment',
        component: CriteriaAccessmentComponent,
    },
    {
        path: 'add-concept-note',
        component: ConceptNoteComponent,
    },
] as Routes;
