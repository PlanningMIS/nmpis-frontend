import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// prettier-ignore
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/project' },

    // Redirect signed-in user to the '/dashboards/project'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {
        path: 'signed-in-redirect',
        pathMatch: 'full',
        redirectTo: 'dashboards/project'
    },

    // { path: 'user', component: UserComponent, canActivate: [RoleGuard], data: { role: 'user' } },


    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes') },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes') },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes') },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes') },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes') }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes') },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes') }
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes') },
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [

            // Dashboards
            {
                path: 'dashboards', children: [
                    { path: 'project', loadChildren: () => import('app/modules/admin/dashboards/project/project.routes') },
                    { path: 'finance', loadChildren: () => import('app/modules/admin/dashboards/finance/finance.routes') },
                ]
            },

            // Apps
            {
                path: 'apps', children: [
                    { path: 'projects', loadChildren: () => import('app/modules/users/project/project.routes') },
                    { path: 'file-manager', loadChildren: () => import('app/modules/admin/apps/file-manager/file-manager.routes') },
                ]
            },

            // Pages
            {
                path: 'pages', children: [

                    // Error
                    {
                        path: 'error', children: [
                            { path: '404', loadChildren: () => import('app/modules/shared/pages/error/error-404/error-404.routes') },
                            { path: '500', loadChildren: () => import('app/modules/shared/pages/error/error-500/error-500.routes') }
                        ]
                    },

                    // Maintenance
                    { path: 'maintenance', loadChildren: () => import('app/modules/shared/pages/maintenance/maintenance.routes') },

                    // Settings
                    { path: 'settings', loadChildren: () => import('app/modules/shared/pages/settings/settings.routes') },
                ]
            },

            // Documentation
            {
                path: 'docs', children: [

                    // Changelog
                    { path: 'changelog', loadChildren: () => import('app/modules/admin/docs/changelog/changelog.routes') },

                    // Guides
                    { path: 'guides', loadChildren: () => import('app/modules/admin/docs/guides/guides.routes') }
                ]
            },

            // 404 & Catch all
            { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/shared/pages/error/error-404/error-404.routes') },
            { path: '**', redirectTo: '404-not-found' }
        ]
    }
];
