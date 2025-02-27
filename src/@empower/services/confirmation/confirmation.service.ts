import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmpowerConfirmationConfig } from '@empower/services/confirmation/confirmation.types';
import { EmpowerConfirmationDialogComponent } from '@empower/services/confirmation/dialog/dialog.component';
import { merge } from 'lodash-es';
import { EmpowerConfirmationAlertComponent } from './alert/alert.component';

@Injectable({ providedIn: 'root' })
export class EmpowerConfirmationService {
    private _matDialog: MatDialog = inject(MatDialog);
    private _defaultConfig: EmpowerConfirmationConfig = {
        title: 'Confirm action',
        message: 'Are you sure you want to confirm this action?',
        icon: {
            show: true,
            name: 'heroicons_outline:exclamation-triangle',
            color: 'warn',
        },
        actions: {
            confirm: {
                show: true,
                label: 'Confirm',
                color: 'warn',
            },
            cancel: {
                show: true,
                label: 'Cancel',
            },
        },
        dismissible: false,
    };

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(
        config: EmpowerConfirmationConfig = {}
    ): MatDialogRef<EmpowerConfirmationDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(EmpowerConfirmationDialogComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'empower-confirmation-dialog-panel',
        });
    }

    openAlert(
        config: EmpowerConfirmationConfig = {}
    ): MatDialogRef<EmpowerConfirmationDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(EmpowerConfirmationAlertComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'empower-confirmation-dialog-panel',
        });
    }
}
