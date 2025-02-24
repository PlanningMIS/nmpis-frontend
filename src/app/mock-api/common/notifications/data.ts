/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const notifications = [
    {
        id: '1',
        icon: 'heroicons_mini:clipboard-document',
        title: 'Project Submission',
        description: 'Your project proposal has been submitted successfully.',
        time: now.minus({ minute: 15 }).toISO(), // 15 minutes ago
        read: false,
    },
    {
        id: '2',
        icon: 'heroicons_mini:check-circle',
        title: 'Approval Status',
        description: 'Your project has been approved by the commission.',
        time: now.minus({ hour: 1 }).toISO(), // 1 hour ago
        read: true,
        link: '/projects/status',
        useRouter: true,
    },
    {
        id: '3',
        icon: 'heroicons_mini:document-text',
        title: 'Report Submission',
        description: 'The quarterly report is due in 3 days.',
        time: now.minus({ hour: 3 }).toISO(), // 3 hours ago
        read: false,
        link: '/reports/submission',
        useRouter: true,
    },
    {
        id: '4',
        icon: 'heroicons_mini:user-group',
        title: 'Meeting Scheduled',
        description: 'A planning commission meeting is scheduled for tomorrow at 10 AM.',
        time: now.minus({ hour: 6 }).toISO(), // 6 hours ago
        read: false,
        link: '/meetings/schedule',
        useRouter: true,
    },
    {
        id: '5',
        icon: 'heroicons_mini:currency-dollar',
        title: 'Budget Allocation',
        description: 'The budget for your project has been allocated.',
        time: now.minus({ day: 1 }).toISO(), // 1 day ago
        read: true,
        link: '/budget/allocation',
        useRouter: true,
    },
    {
        id: '6',
        icon: 'heroicons_mini:exclamation-circle',
        title: 'Project Delay Notice',
        description: 'Your project is experiencing delays. Please review the timeline.',
        time: now.minus({ day: 2 }).toISO(), // 2 days ago
        read: false,
        link: '/projects/delays',
        useRouter: true,
    },
    {
        id: '7',
        icon: 'heroicons_mini:chart-bar',
        title: 'Performance Review',
        description: 'Your project performance report is now available.',
        time: now.minus({ day: 3 }).toISO(), // 3 days ago
        read: true,
        link: '/projects/performance',
        useRouter: true,
    },
    {
        id: '8',
        icon: 'heroicons_mini:shield-check',
        title: 'Compliance Check',
        description: 'Your project has passed the compliance check.',
        time: now.minus({ day: 5 }).toISO(), // 5 days ago
        read: true,
        link: '/compliance/check',
        useRouter: true,
    },
];
