import { FileManagerMockApi } from 'app/mock-api/apps/file-manager/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotificationsMockApi } from 'app/mock-api/common/notifications/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';
import { FinanceMockApi } from 'app/mock-api/dashboards/finance/api';
import { ProjectMockApi } from 'app/mock-api/dashboards/project/api';

export const mockApiServices = [
    FileManagerMockApi,
    FinanceMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    ProjectMockApi,
    ShortcutsMockApi,
];
