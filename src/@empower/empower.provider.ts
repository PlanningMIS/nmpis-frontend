import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
    APP_INITIALIZER,
    ENVIRONMENT_INITIALIZER,
    EnvironmentProviders,
    Provider,
    importProvidersFrom,
    inject,
} from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {
    EMPOWER_MOCK_API_DEFAULT_DELAY,
    mockApiInterceptor,
} from '@empower/lib/mock-api';
import { EmpowerConfig } from '@empower/services/config';
import { EMPOWER_CONFIG } from '@empower/services/config/config.constants';
import { EmpowerConfirmationService } from '@empower/services/confirmation';
import {
    EmpowerLoadingService,
    empowerLoadingInterceptor,
} from '@empower/services/loading';
import { EmpowerMediaWatcherService } from '@empower/services/media-watcher';
import { EmpowerPlatformService } from '@empower/services/platform';
import { EmpowerSplashScreenService } from '@empower/services/splash-screen';
import { EmpowerUtilsService } from '@empower/services/utils';

export type EmpowerProviderConfig = {
    mockApi?: {
        delay?: number;
        services?: any[];
    };
    empower?: EmpowerConfig;
};

/**
 * Empower provider
 */
export const provideEmpower = (
    config: EmpowerProviderConfig
): Array<Provider | EnvironmentProviders> => {
    // Base providers
    const providers: Array<Provider | EnvironmentProviders> = [
        {
            // Disable 'theme' sanity check
            provide: MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme: false,
                version: true,
            },
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill',
            },
        },
        {
            provide: EMPOWER_MOCK_API_DEFAULT_DELAY,
            useValue: config?.mockApi?.delay ?? 0,
        },
        {
            provide: EMPOWER_CONFIG,
            useValue: config?.empower ?? {},
        },

        importProvidersFrom(MatDialogModule),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(EmpowerConfirmationService),
            multi: true,
        },

        provideHttpClient(withInterceptors([empowerLoadingInterceptor])),
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(EmpowerLoadingService),
            multi: true,
        },

        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(EmpowerMediaWatcherService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(EmpowerPlatformService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(EmpowerSplashScreenService),
            multi: true,
        },
        {
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => inject(EmpowerUtilsService),
            multi: true,
        },
    ];

    // Mock Api services
    if (config?.mockApi?.services) {
        providers.push(
            provideHttpClient(withInterceptors([mockApiInterceptor])),
            {
                provide: APP_INITIALIZER,
                deps: [...config.mockApi.services],
                useFactory: () => (): any => null,
                multi: true,
            }
        );
    }

    // Return the providers
    return providers;
};
