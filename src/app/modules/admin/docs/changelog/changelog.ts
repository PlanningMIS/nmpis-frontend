import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'changelog',
    templateUrl: './changelog.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [],
})
export class ChangelogComponent {
    changelog: any[] = [
        // 1.0.0
        {
            version: '1.0.0',
            releaseDate: 'Feb 01, 2025',
            changes: [
                {
                    type: 'Release',
                    list: [
                        '(Dependencies) Updated Angular & Angular Material to v18',
                        '(Dependencies) Updated other packages',
                        'Moved the project to the new "application" builder',
                        'Moved assets to "/public" folder',
                        'Added prettier and re-formatted entire codebase with it',
                        'Moved to the new control flow syntax (@if, @for, @switch, and etc.)',
                    ],
                },
                {
                    type: 'Fixed',
                    list: [
                        'Missing/renamed icons on navigation',
                        'Mat-select icon color',
                        'Mat-menu misalignment and size issues',
                    ],
                },
            ],
        },

    ];
}
