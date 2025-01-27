/* eslint-disable */
import { EmpowerNavigationItem } from '@empower/components/navigation';

export const defaultNavigation: EmpowerNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Super Admin Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'dashboards.finance',
                title: 'Admin Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:banknotes',
                link: '/dashboards/finance',
            },
        ],
    },
    {
        id: 'apps',
        title: 'Applications',
        subtitle: 'Custom made application designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'apps.clients',
                title: 'Clients',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/apps/clients',
            },
            {
                id: 'apps.billing',
                title: 'Billing',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/apps/billing',
            },
            {
                id: 'apps.labSample',
                title: 'Lab Sample Centric',
                type: 'collapsable',
                icon: 'heroicons_outline:beaker',
                children: [
                    {
                        id: 'pages.labSample.collection',
                        title: 'Sample Collection',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'apps.labSample.sample',
                                title: 'Sample',
                                type: 'basic',
                                link: '/apps/laboratory/sample',
                            },
                            {
                                id: 'apps.labSample.rejected',
                                title: 'Rejected Sample',
                                type: 'basic',
                                link: '/apps/laboratory/rejected-sample',
                            },
                        ],
                    },
                    {
                        id: 'pages.labSample.analysis',
                        title: 'Sample Analysis',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'apps.labAnalysis.histopathology',
                                title: 'Histopathology',
                                type: 'basic',
                                link: '/apps/laboratory/histopathology',
                            },
                            {
                                id: 'apps.labAnalysis.parasitology',
                                title: 'Parasitology',
                                type: 'basic',
                                link: '/apps/laboratory/parasitology',
                            },
                            {
                                id: 'apps.labAnalysis.haematology',
                                title: 'Haematology',
                                type: 'basic',
                                link: '/apps/laboratory/haematology',
                            },
                            {
                                id: 'apps.labAnalysis.chemistry',
                                title: 'Clinical Chemistry',
                                type: 'basic',
                                link: '/apps/laboratory/chemistry',
                            },
                        ],
                    },
                    {
                        id: 'apps.labSample.result',
                        title: 'Sample Results',
                        type: 'basic',
                        link: '/apps/laboratory/sample-results',
                    },
                ],
            },
            {
                id: 'apps.consultation',
                title: 'Consultation',
                type: 'collapsable',
                icon: 'heroicons_outline:building-office-2',
                children: [
                    {
                        id: 'apps.consultation.nurse',
                        title: 'Nurse',
                        type: 'basic',
                        link: '/apps/consultation/nurse',
                    },
                    {
                        id: 'apps.consultation.doctor',
                        title: 'Doctor',
                        type: 'basic',
                        link: '/apps/consultation/doctor',
                    },
                ],
            },

        ],
    },
    {
        id: 'divider-1',
        type: 'divider',
    },
    {
        id: 'admin',
        title: 'System Admin',
        subtitle: 'Custom made application designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'admin.billing',
                title: 'Billing',
                type: 'collapsable',
                icon: 'heroicons_outline:building-office-2',
                children: [
                    {
                        id: 'apps.consultation.nurse',
                        title: 'Payment Method',
                        type: 'basic',
                        link: '/admin/billing/payment-method',
                    },
                    {
                        id: 'apps.consultation.doctor',
                        title: 'Billing Category',
                        type: 'basic',
                        link: '/admin/billing/billing-category',
                    },
                    {
                        id: 'apps.consultation.doctor',
                        title: 'Billing Category Item',
                        type: 'basic',
                        link: '/admin/billing/billing-item-category',
                    },
                    {
                        id: 'apps.consultation.doctor',
                        title: 'Price',
                        type: 'basic',
                        link: '/admin/billing/price',
                    },
                ],
            },
            {
                id: 'admin.settings',
                title: 'Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog-8-tooth',
                link: '/pages/settings',
            },
        ],
    },
    {
        id: 'divider-1',
        type: 'divider',
    },
    {
        id: 'documentation',
        title: 'Documentation',
        subtitle: 'Everything you need to know about Empower',
        type: 'group',
        icon: 'heroicons_outline:information-circle',
        children: [
            {
                id: 'documentation.changelog',
                title: 'Changelog',
                type: 'basic',
                icon: 'heroicons_outline:megaphone',
                link: '/docs/changelog',
                badge: {
                    title: '1.0.0',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'documentation.guides',
                title: 'Guides',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/docs/guides',
            },
        ],
    },
    {
        id: 'divider-2',
        type: 'divider',
    },

];
