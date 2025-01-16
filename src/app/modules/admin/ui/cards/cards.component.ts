import { TextFieldModule } from '@angular/cdk/text-field';
import { NgClass, TitleCasePipe } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    QueryList,
    Renderer2,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MatButtonToggleChange,
    MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { empowerCardComponent } from '@empower/components/card';

@Component({
    selector: 'cards',
    templateUrl: './cards.component.html',
    styles: [
        `
            cards empower-card {
                margin: 16px;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatButtonToggleModule,
        FormsModule,
        empowerCardComponent,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        NgClass,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatDividerModule,
        MatTooltipModule,
        TitleCasePipe,
    ],
})
export class CardsComponent implements AfterViewInit {
    @ViewChildren(empowerCardComponent, { read: ElementRef })
    private _empowerCards: QueryList<ElementRef>;

    filters: string[] = [
        'all',
        'article',
        'listing',
        'list',
        'info',
        'shopping',
        'pricing',
        'testimonial',
        'post',
        'interactive',
    ];
    numberOfCards: any = {};
    selectedFilter: string = 'all';

    /**
     * Constructor
     */
    constructor(private _renderer2: Renderer2) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // Calculate the number of cards
        this._calcNumberOfCards();

        // Filter the cards for the first time
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On filter change
     *
     * @param change
     */
    onFilterChange(change: MatButtonToggleChange): void {
        // Set the filter
        this.selectedFilter = change.value;

        // Filter the cards
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _calcNumberOfCards(): void {
        // Prepare the numberOfCards object
        this.numberOfCards = {};

        // Prepare the count
        let count = 0;

        // Go through the filters
        this.filters.forEach((filter) => {
            // For each filter, calculate the card count
            if (filter === 'all') {
                count = this._empowerCards.length;
            } else {
                count = this.numberOfCards[filter] = this._empowerCards.filter(
                    (empowerCard) =>
                        empowerCard.nativeElement.classList.contains(
                            'filter-' + filter
                        )
                ).length;
            }

            // Fill the numberOfCards object with the counts
            this.numberOfCards[filter] = count;
        });
    }

    /**
     * Filter the cards based on the selected filter
     *
     * @private
     */
    private _filterCards(): void {
        // Go through all empower-cards
        this._empowerCards.forEach((empowerCard) => {
            // If the 'all' filter is selected...
            if (this.selectedFilter === 'all') {
                // Remove hidden class from all cards
                empowerCard.nativeElement.classList.remove('hidden');
            }
            // Otherwise...
            else {
                // If the card has the class name that matches the selected filter...
                if (
                    empowerCard.nativeElement.classList.contains(
                        'filter-' + this.selectedFilter
                    )
                ) {
                    // Remove the hidden class
                    empowerCard.nativeElement.classList.remove('hidden');
                }
                // Otherwise
                else {
                    // Add the hidden class
                    empowerCard.nativeElement.classList.add('hidden');
                }
            }
        });
    }
}
