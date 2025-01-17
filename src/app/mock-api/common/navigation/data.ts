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
                        id: 'apps.labSample.analysis',
                        title: 'Sample Analysis',
                        type: 'basic',
                        link: '/apps/laboratory/sample-analysis',
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
                id: 'apps.academy',
                title: 'Academy',
                type: 'basic',
                icon: 'heroicons_outline:academic-cap',
                link: '/apps/academy',
            },
            {
                id: 'apps.contacts',
                title: 'Contacts',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/apps/contacts',
            },
            {
                id: 'apps.ecommerce',
                title: 'ECommerce',
                type: 'collapsable',
                icon: 'heroicons_outline:shopping-cart',
                children: [
                    {
                        id: 'apps.ecommerce.inventory',
                        title: 'Inventory',
                        type: 'basic',
                        link: '/apps/ecommerce/inventory',
                    },
                    {
                        id: 'apps.ecommerce.table',
                        title: 'Table',
                        type: 'basic',
                        link: '/apps/ecommerce/table',
                    },
                ],
            },
            {
                id: 'apps.file-manager',
                title: 'File Manager',
                type: 'basic',
                icon: 'heroicons_outline:cloud',
                link: '/apps/file-manager',
            },
        ],
    },
    {
        id: 'pages',
        title: 'Pages',
        subtitle: 'Custom made page designs',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            {
                id: 'pages.error',
                title: 'Error',
                type: 'collapsable',
                icon: 'heroicons_outline:exclamation-circle',
                children: [
                    {
                        id: 'pages.error.404',
                        title: '404',
                        type: 'basic',
                        link: '/pages/error/404',
                    },
                    {
                        id: 'pages.error.500',
                        title: '500',
                        type: 'basic',
                        link: '/pages/error/500',
                    },
                ],
            },
            {
                id: 'pages.invoice',
                title: 'Invoice',
                type: 'collapsable',
                icon: 'heroicons_outline:calculator',
                children: [
                    {
                        id: 'pages.invoice.printable',
                        title: 'Printable',
                        type: 'collapsable',
                        children: [
                            {
                                id: 'pages.invoice.printable.compact',
                                title: 'Compact',
                                type: 'basic',
                                link: '/pages/invoice/printable/compact',
                            },
                            {
                                id: 'pages.invoice.printable.modern',
                                title: 'Modern',
                                type: 'basic',
                                link: '/pages/invoice/printable/modern',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'pages.maintenance',
                title: 'Maintenance',
                type: 'basic',
                icon: 'heroicons_outline:exclamation-triangle',
                link: '/pages/maintenance',
            },
            {
                id: 'pages.profile',
                title: 'Profile',
                type: 'basic',
                icon: 'heroicons_outline:user-circle',
                link: '/pages/profile',
            },
            {
                id: 'pages.settings',
                title: 'Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog-8-tooth',
                link: '/pages/settings',
            },
        ],
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        subtitle: 'Building blocks of the UI & UX',
        type: 'group',
        icon: 'heroicons_outline:rectangle-stack',
        children: [
            {
                id: 'user-interface.empower-components',
                title: 'Empower Components',
                type: 'basic',
                icon: 'heroicons_outline:square-3-stack-3d',
                link: '/ui/empower-components',
            },
            {
                id: 'user-interface.other-components',
                title: 'Other Components',
                type: 'basic',
                icon: 'heroicons_outline:square-3-stack-3d',
                link: '/ui/other-components',
            },
            {
                id: 'user-interface.cards',
                title: 'Cards',
                type: 'basic',
                icon: 'heroicons_outline:square-2-stack',
                link: '/ui/cards',
            },
            {
                id: 'user-interface.forms',
                title: 'Forms',
                type: 'collapsable',
                icon: 'heroicons_outline:pencil-square',
                children: [
                    {
                        id: 'user-interface.forms.fields',
                        title: 'Fields',
                        type: 'basic',
                        link: '/ui/forms/fields',
                    },
                    {
                        id: 'user-interface.forms.layouts',
                        title: 'Layouts',
                        type: 'basic',
                        link: '/ui/forms/layouts',
                    },
                    {
                        id: 'user-interface.forms.wizards',
                        title: 'Wizards',
                        type: 'basic',
                        link: '/ui/forms/wizards',
                    },
                ],
            },
            {
                id: 'user-interface.icons',
                title: 'Icons',
                type: 'collapsable',
                icon: 'heroicons_outline:bolt',
                children: [
                    {
                        id: 'user-interface.icons.heroicons-outline',
                        title: 'Heroicons Outline',
                        type: 'basic',
                        link: '/ui/icons/heroicons-outline',
                    },
                    {
                        id: 'user-interface.icons.heroicons-solid',
                        title: 'Heroicons Solid',
                        type: 'basic',
                        link: '/ui/icons/heroicons-solid',
                    },
                    {
                        id: 'user-interface.icons.heroicons-mini',
                        title: 'Heroicons Mini',
                        type: 'basic',
                        link: '/ui/icons/heroicons-mini',
                    },
                    {
                        id: 'user-interface.icons.material-twotone',
                        title: 'Material Twotone',
                        type: 'basic',
                        link: '/ui/icons/material-twotone',
                    },
                    {
                        id: 'user-interface.icons.material-outline',
                        title: 'Material Outline',
                        type: 'basic',
                        link: '/ui/icons/material-outline',
                    },
                    {
                        id: 'user-interface.icons.material-solid',
                        title: 'Material Solid',
                        type: 'basic',
                        link: '/ui/icons/material-solid',
                    },
                    {
                        id: 'user-interface.icons.feather',
                        title: 'Feather',
                        type: 'basic',
                        link: '/ui/icons/feather',
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
                    title: '20.0.0',
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
