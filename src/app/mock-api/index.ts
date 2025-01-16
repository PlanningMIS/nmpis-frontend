import { AcademyMockApi } from 'app/mock-api/apps/academy/api';
import { ContactsMockApi } from 'app/mock-api/apps/contacts/api';
import { ECommerceInventoryMockApi } from 'app/mock-api/apps/ecommerce/inventory/api';
import { FileManagerMockApi } from 'app/mock-api/apps/file-manager/api';
import { AuthMockApi } from 'app/mock-api/common/auth/api';
import { MessagesMockApi } from 'app/mock-api/common/messages/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotificationsMockApi } from 'app/mock-api/common/notifications/api';
import { SearchMockApi } from 'app/mock-api/common/search/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';
import { UserMockApi } from 'app/mock-api/common/user/api';
import { FinanceMockApi } from 'app/mock-api/dashboards/finance/api';
import { ProjectMockApi } from 'app/mock-api/dashboards/project/api';
import { IconsMockApi } from 'app/mock-api/ui/icons/api';

export const mockApiServices = [
    AcademyMockApi,
    AuthMockApi,
    ContactsMockApi,
    ECommerceInventoryMockApi,
    FileManagerMockApi,
    FinanceMockApi,
    IconsMockApi,
    MessagesMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    ProjectMockApi,
    SearchMockApi,
    ShortcutsMockApi,
    UserMockApi,
];
