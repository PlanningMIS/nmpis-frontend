/* eslint-disable */
import { EmpowerNavigationItem } from '@empower/components/navigation';

export const defaultNavigation: EmpowerNavigationItem[] = [
    {
        id: 'project',
        title: 'Project',
        subtitle: 'Project steps',
        type: 'group',
        icon: 'heroicons_solid:home',
        children: [
            {
                id: 'project.project-initiation',
                title: 'Project initiation',
                type: 'collapsable',
                icon: 'heroicons_solid:clipboard-document-check',
                children: [
                    {
                        id: 'project.project-initiation.list',
                        title: 'List',
                        type: 'basic',
                        link: '/apps/projects/list',
                    },
                    {
                        id: 'project.project-initiation.concept-note',
                        title: 'Concept Note',
                        type: 'basic',
                        link: 'apps/projects/add-concept-note',
                    },
                    {
                        id: 'project.project-initiation.appraisal',
                        title: 'Appraisal',
                        type: 'basic',
                        // link: '/project/project-initiation/appraisal',
                        link: '/pages/settings',
                    },
                ],
            },
            {
                id: 'project.project-financing',
                title: 'Project Financing',
                type: 'collapsable',
                icon: 'heroicons_solid:document-text',
                children: [
                    {
                        id: 'project.project-financing.budget-details',
                        title: 'Budget Details',
                        type: 'basic',
                        link: '/project/project-financing/budget',
                    },
                ],
            },
            {
                id: 'project.project-implementation',
                title: 'Project Implementation',
                type: 'collapsable',
                icon: 'heroicons_solid:document-text',
                children: [
                    {
                        id: 'project.project-implementation.budget-details',
                        title: 'Requisition',
                        type: 'basic',
                        link: '/project/project-implementation/Requisition',
                    },
                    {
                        id: 'project.project-implementation.budget-details',
                        title: 'GBD Reviewing',
                        type: 'basic',
                        link: '/project/project-implementation/Reviewing',
                    },
                    {
                        id: 'project.project-implementation.budget-details',
                        title: 'PST Approval',
                        type: 'basic',
                        link: '/project/project-implementation/Approval',
                    },
                ],
            },
            {
                id: 'project.project-termination',
                title: 'Project Termination',
                type: 'collapsable',
                icon: 'heroicons_solid:document-text',
                children: [
                    {
                        id: 'project.project-termination.initiation',
                        title: 'Initiation',
                        type: 'basic',
                        link: '/project/project-termination/initiation',
                    },
                    {
                        id: 'project.project-termination.npd-review',
                        title: 'NPD Review',
                        type: 'basic',
                        link: '/project/project-termination/review',
                    },
                ],
            },
        ],
    },
    {
        id: 'evaluation',
        title: 'M&E',
        subtitle: 'Monitoring and Evaluation',
        type: 'group',
        icon: 'heroicons_solid:presentation-chart-bar',
        children: [
            {
                id: 'evaluation.planning',
                title: 'M&E Planning',
                type: 'basic',
                icon: 'heroicons_solid:presentation-chart-bar',
                link: '/evaluation/planning',
            },
            {
                id: 'evaluation.request',
                title: 'M&E Request',
                type: 'basic',
                icon: 'heroicons_solid:presentation-chart-bar',
                link: '/evaluation/request',
            },
            {
                id: 'evaluation.reporting',
                title: 'M&E Reporting',
                type: 'basic',
                icon: 'heroicons_solid:presentation-chart-bar',
                link: '/evaluation/reporting',
            },
            {
                id: 'evaluation.projects',
                title: 'M&E Projects',
                type: 'basic',
                icon: 'heroicons_solid:presentation-chart-bar',
                link: '/evaluation/projects',
            },
        ],
    },
    {
        id: 'reports',
        title: 'Reports',
        subtitle: 'Reports',
        type: 'group',
        icon: 'heroicons_solid:presentation-chart-bar',
        children: [
            {
                id: 'reports.registration',
                title: 'Project Registration',
                type: 'basic',
                icon: 'heroicons_solid:presentation-chart-bar',
                link: '/reports',
            },
        ],
    },
    {
        id: 'system-documents',
        title: 'System Documents',
        subtitle: 'System Document',
        type: 'group',
        icon: 'heroicons_solid:clipboard-document-list',
        children: [
            {
                id: 'system-documents.registration',
                title: 'System Document',
                type: 'basic',
                icon: 'heroicons_solid:presentation-chart-bar',
                link: 'apps/file-manager',
            },
        ],
    },
    {
        id: 'user-management',
        title: 'User Management',
        subtitle: 'User Management',
        type: 'group',
        icon: 'heroicons_solid:clipboard-document-list',
        children: [
            {
                id: 'user-management.registration',
                title: 'User Management',
                type: 'basic',
                icon: 'heroicons_solid:presentation-chart-bar',
                link: '/user-management',
            },
        ],
    },
];

export const compactNavigation: EmpowerNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'basic',
        icon: 'heroicons_solid:home',
        link: '/dashboards/project',
    },
    {
        id: 'project',
        title: 'Project',
        tooltip: 'Project',
        type: 'aside',
        icon: 'heroicons_solid:rectangle-stack',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'evaluation',
        title: 'M&E',
        tooltip: 'M&E',
        type: 'aside',
        icon: 'heroicons_solid:presentation-chart-line',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'reports',
        title: 'Reports',
        tooltip: 'Reports',
        type: 'aside',
        icon: 'heroicons_solid:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'system-documents',
        title: 'System Documents',
        tooltip: 'System Documents',
        type: 'aside',
        icon: 'heroicons_solid:document-text',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-management',
        title: 'User Management',
        tooltip: 'User Management',
        type: 'aside',
        icon: 'heroicons_solid:user-group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];